// required the dependencies
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const usersRoute = require('./routes/user.route');
const campaignsRoute = require('./routes/campaigns.route');
const routeGuard = require('./middleware/jwt-route-guard.middleware');
const cors = require('cors');
// a const to hold the port we gonna use
const PORT = 3000;
//create an instance of express
const app = express();
// specify the body parser middleware to handle JSON data
app.use(bodyParser.json());
// use cors to restrict request only from localhost:4200
app.use(cors({
    origin: 'http://localhost:4200'
}));
//this mean when we navigate to the /api use the api route
app.use('/users',usersRoute);
//before navigating to the ∕campaigns route we have to execute the middleware campaignsGuard
app.use('/campaigns',routeGuard.campaignsGuard,campaignsRoute);

app.listen(PORT,()=>{
    console.log(`Express server is listening on port ${PORT}`);
});

