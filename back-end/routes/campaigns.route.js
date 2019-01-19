// requiring 
const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaign.controllers');

// routes
router.get('/list',campaignController.getCampaigns);



module.exports = router;