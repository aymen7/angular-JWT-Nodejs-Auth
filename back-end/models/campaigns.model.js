// required our mongoose db
const db = require('./db');
const Schema = db.Schema;

const campaignSchema = new Schema({
    'label': String,
    'start-date': String,
    'end-date': String,
    'status': String
});
module.exports = db.model('campaign',campaignSchema,'campaigns');