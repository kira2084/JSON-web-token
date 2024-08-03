const {CustomAPIError}=require('../errors/index')
const jwt=require('jsonwebtoken')

require('dotenv').config();
const login=async(req,res)=>{
    const {username,password}=req.body;
    if(!username||!password){
        throw new CustomAPIError('please provided requested things',400)
    }
    const id=new Date().getDate();
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'});//we use jwt.sign() becos it produce unique token of user or somethinf that match only to username
    console.log(token)
    res.status(200).json({msg:'user created',token});
}

const dashboard=async(req,res)=>{

    const lucky=Math.floor(Math.random()*100)
    return res.status(200).json({msg:`hello ${req.user.username}`,secret:`here is your authorized data and luck number is ${lucky}`})
   
}

module.exports={
    login,dashboard, 
}