const jwt = require('jsonwebtoken');
// we are getting the public key from the our local environment
const public_key = process.env.API_PUBLIC_KEY;

module.exports = {
    campaignsGuard : (req,res,next) =>{
        //first we check the headers if it has the key of authorization 
        if(!req.headers.authorization){
            return res.status(401).send('unauthorized request');
        }
        // then we get the bearer string from the the authorization's key 
        let bearer_str = req.headers.authorization.split(' ')[0];
        if (bearer_str !== 'Bearer'){
            return res.status(401).send('unauthorized request');
        }
        // then we get the token from the the authorization's key 
        let token = req.headers.authorization.split(' ')[1];
        //check if the token if not empty
        if (token === 'null'){
            return res.status(401).send('unauthorized request');
        }
        /* verify and store the token payload into a variable called payload 
        * we pass two obligatory params which are the token and the public key 
        * 3re params is optional for the expiration of the token
        */
        let payload = jwt.verify(token,public_key,{expiresIn:'12h'});
        if(!payload){
            return res.status(401).send('unauthorized request');   
        }
        // if everything is correct we pass the execution
        next();
    },
}
