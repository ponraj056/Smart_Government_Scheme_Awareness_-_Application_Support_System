const express = require('express');
const router = express.Router();
const {
  getAllSchemes,
  getSchemeById,
  getSchemesByCategory,
  searchSchemes,
  createScheme,
  updateScheme,
  deleteScheme,
  getRecommendations,
  getSchemeStats,
} = require('../controllers/schemeController');
const { protect, admin } = require('../middleware/auth');

router.get('/', getAllSchemes);
router.get('/stats', getSchemeStats);
router.get('/search', searchSchemes);
router.get('/category/:category', getSchemesByCategory);
router.post('/recommendations', getRecommendations);
router.get('/:id', getSchemeById);

router.post('/', protect, admin, createScheme);
router.put('/:id', protect, admin, updateScheme);
router.delete('/:id', protect, admin, deleteScheme);

module.exports = router;