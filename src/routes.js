const { default: axios } = require('axios');
const express=require('express');
const router=express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config()

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${process.env.NODEMAILER_EMAIL_USER}`,
        pass: `${process.env.NODEMAILER_EMAIL_PASS}`
    }
});




router.post('/auth/callback',async(req,res)=>{
    try {

        let token=req.body.token

        let verifyToken=await axios.get(`${process.env.AUTH0_URL}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

        // console.log(verifyToken.data)


        if(verifyToken?.data?.email){
            var mailOptions = {
                from: `${process.env.NODEMAILER_EMAIL_USER}`,
                to: `${verifyToken.data.email}`,
                subject: 'Token verified',
                text: `Token : ${token}`
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            

        }
        
        
    } catch (error) {
        console.log(error);
        res.status(401).json({error:"invalid token"})
        
    }
})



module.exports=router;