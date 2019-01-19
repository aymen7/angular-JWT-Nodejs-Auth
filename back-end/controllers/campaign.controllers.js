const Campaign = require('../models/campaigns.model');
exports.getCampaigns = (req,res) => {
    Campaign.find({},(err,campaigns)=>{
        if (err) console.log(`error was found: ${err}`);
        res.json(campaigns);
    });
}