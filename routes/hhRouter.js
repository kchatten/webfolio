const express = require(`express`);
const router = express.Router();
const hhController = require('../controllers/hhController.js')



router.get('/', hhController.homepage);

module.exports = router;