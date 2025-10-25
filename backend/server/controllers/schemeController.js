const Scheme = require('../models/Scheme');

exports.getAllSchemes = async (req, res, next) => {
  try {
    const currentDate = new Date();
    const { category, search, limit = 50 } = req.query;

    let query = {
      deadline: { $gte: currentDate },
      isActive: true,
    };

    if (category && category !== 'All') {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const schemes = await Scheme.find(query)
      .sort({ deadline: 1 })
      .limit(parseInt(limit));

    res.status(200).json({
      success: true,
      count: schemes.length,
      data: schemes,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSchemeById = async (req, res, next) => {
  try {
    const scheme = await Scheme.findById(req.params.id);

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: 'Scheme not found',
      });
    }

    scheme.views += 1;
    await scheme.save();

    res.status(200).json({
      success: true,
      data: scheme,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSchemesByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const currentDate = new Date();

    const schemes = await Scheme.find({
      category,
      deadline: { $gte: currentDate },
      isActive: true,
    }).sort({ deadline: 1 });

    res.status(200).json({
      success: true,
      count: schemes.length,
      data: schemes,
    });
  } catch (error) {
    next(error);
  }
};

exports.searchSchemes = async (req, res, next) => {
  try {
    const { q } = req.query;
    const currentDate = new Date();

    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required',
      });
    }

    const schemes = await Scheme.find({
      $text: { $search: q },
      deadline: { $gte: currentDate },
      isActive: true,
    }).sort({ score: { $meta: 'textScore' } });

    res.status(200).json({
      success: true,
      count: schemes.length,
      data: schemes,
    });
  } catch (error) {
    next(error);
  }
};

exports.getRecommendations = async (req, res, next) => {
  try {
    const { age, occupation, income, state, category } = req.body;
    const currentDate = new Date();

    let query = {
      deadline: { $gte: currentDate },
      isActive: true,
    };

    if (category && category !== 'All') {
      query.category = category;
    }

    const schemes = await Scheme.find(query)
      .sort({ deadline: 1, views: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: schemes.length,
      data: schemes,
    });
  } catch (error) {
    next(error);
  }
};

exports.createScheme = async (req, res, next) => {
  try {
    req.body.createdBy = req.user.id;
    const scheme = await Scheme.create(req.body);

    res.status(201).json({
      success: true,
      data: scheme,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateScheme = async (req, res, next) => {
  try {
    const scheme = await Scheme.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: 'Scheme not found',
      });
    }

    res.status(200).json({
      success: true,
      data: scheme,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteScheme = async (req, res, next) => {
  try {
    const scheme = await Scheme.findByIdAndDelete(req.params.id);

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: 'Scheme not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Scheme deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

exports.getSchemeStats = async (req, res, next) => {
  try {
    const currentDate = new Date();

    const totalActive = await Scheme.countDocuments({
      deadline: { $gte: currentDate },
      isActive: true,
    });

    const urgent = await Scheme.countDocuments({
      deadline: { $gte: currentDate, $lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
      isActive: true,
    });

    const byCategory = await Scheme.aggregate([
      {
        $match: {
          deadline: { $gte: currentDate },
          isActive: true,
        },
      },
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalActive,
        urgent,
        byCategory,
      },
    });
  } catch (error) {
    next(error);
  }
};