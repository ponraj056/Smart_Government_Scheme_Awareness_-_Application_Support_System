const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const User = require('../models/User');

router.post('/save-scheme/:schemeId', protect, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    if (user.savedSchemes.includes(req.params.schemeId)) {
      return res.status(400).json({
        success: false,
        message: 'Scheme already saved',
      });
    }

    user.savedSchemes.push(req.params.schemeId);
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Scheme saved successfully',
      data: user.savedSchemes,
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/save-scheme/:schemeId', protect, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    user.savedSchemes = user.savedSchemes.filter(
      (id) => id.toString() !== req.params.schemeId
    );
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Scheme removed from saved list',
      data: user.savedSchemes,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/saved-schemes', protect, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).populate('savedSchemes');

    res.status(200).json({
      success: true,
      count: user.savedSchemes.length,
      data: user.savedSchemes,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/apply-scheme/:schemeId', protect, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    const alreadyApplied = user.appliedSchemes.some(
      (item) => item.scheme.toString() === req.params.schemeId
    );

    if (alreadyApplied) {
      return res.status(400).json({
        success: false,
        message: 'Already applied to this scheme',
      });
    }

    user.appliedSchemes.push({
      scheme: req.params.schemeId,
      appliedDate: Date.now(),
      status: 'pending',
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: 'Scheme application recorded',
      data: user.appliedSchemes,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/applied-schemes', protect, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).populate(
      'appliedSchemes.scheme'
    );

    res.status(200).json({
      success: true,
      count: user.appliedSchemes.length,
      data: user.appliedSchemes,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;