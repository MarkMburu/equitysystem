const {OAuth2Client} = require('google-auth-library');

const client = new OAuth2Client("830862103963-6dajha66ubcq91rsmcu3jk7p6rp5i81n.apps.googleusercontent.com");

exports.googlelogin=(req,res)=>{
    const {tokenId} = req.body;
    console.log(tokenId)
    client.verifyIdToken({idToken:tokenId, audience: "830862103963-6dajha66ubcq91rsmcu3jk7p6rp5i81n.apps.googleusercontent.com"})
    .then(response => {
        const{email_verified,email,name} = response.payload;
        if(email_verified){
            res.status(200).json()
        }
        else{
    
         res.status(400).json('Error: '+err);
        }
    }).catch(err => {})
}