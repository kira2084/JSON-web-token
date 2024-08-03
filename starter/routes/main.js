const express=require('express');
const router=express.Router();
const authmiddleware=require('../middleware/auth')
const {login,dashboard}=require('../controllers/main');

router.route('/dashboard').get(authmiddleware,dashboard);
router.route('/login').post(login);

module.exports=router;