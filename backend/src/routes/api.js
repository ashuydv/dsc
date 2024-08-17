const express = require('express');
const router = express.Router();
const waitlistController = require('../controllers/waitlistController');

router.post('/waitlist', waitlistController.addToWaitlist);
router.get('/waitlist/count', waitlistController.getWaitlistCount);

module.exports = router;