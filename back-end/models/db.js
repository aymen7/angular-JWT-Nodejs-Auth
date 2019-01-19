// getting mongoose and connect with the db at Mlab
const mongoose = require('mongoose');
const db_url = 'mongodb://dz-innov-fake-user:07dz-innov-fake-user@ds145474.mlab.com:45474/dz-innov-fake-db';
mongoose.connect(db_url,(err)=>{
    const msg = err? `failed to connect to db because of: ${err}`: `successfully connected to mongodb db`;
    console.log(msg);
});
module.exports = mongoose;