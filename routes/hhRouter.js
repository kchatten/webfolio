// This works in conjunction with hhController to redirect traffic and handle data related to Habit Heroes.

const express = require(`express`);
const router = express.Router();
const hhController = require('../controllers/hhController.js')


router.get('/', hhController.homepage);
router.get('/settings', hhController.settings)
router.post('/register', hhController.register);


module.exports = router;