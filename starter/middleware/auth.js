const {CustomAPIError,unauthorized}=require('../errors/index')
const jwt=require('jsonwebtoken')

const authenticationmiddleware=async(req,res,next)=>{
    const authheader=req.headers.authorization;
    if(!authheader || !authheader.startsWith('Bearer ')){
        throw new CustomAPIError('no token provided ')
    }
    const token=authheader.split(' ')[1];//means token takes value based on string is seprated by space" " and where bearer is index [0] and token value is [1] it takes first index
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const {id,username}=decoded;//After verifying the token, it extracts the id and username from the decoded token.
        req.user={id,username};
        next();

    }catch(error){
        throw new unauthorized('verification invalid ')
    }
    
}

module.exports=authenticationmiddleware;