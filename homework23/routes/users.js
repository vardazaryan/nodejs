const express = require('express');
const fs = require('fs');
const router = express.Router();
const upload = require('../middlewares/upload');
const jsons=require('../users.json')

// 1. Գրել ծրագիր որ թույլ կտա վերբեռնել ֆայլ և պահպանել Homework պապկայի upload պապակայում ՝
// պահպանելիս ընտրել պատահական 6-անիշ թվերից կազմված անուն:


router.route('/').get((req, res) => {

    res.end('Return all users list');
}).post(  upload.single('image'), (req, res) => {
    let data=req.body;
    data.image=req.file.path;
    let user=jsons;
 if(user.find((obj)=>{return obj.username===data.username})){

     res.status(400).json({
         success: false,
         data: null, message: 'username is taken'
     });
     console.log("true")
 }else{
     user.push(data);

     let datum = JSON.stringify(user, null, 2);

     fs.writeFile('./users.json', datum, (err) => {
         if (err) throw err;
         console.log('Data written to file');
     });

     res.status(400).json({
         success: true,
         data: {
             username: data.username,

         },

         message:"user created",

     });
     }






});

module.exports = router;
