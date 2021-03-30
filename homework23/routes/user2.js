const express = require('express');
const fs = require('fs');
const upload = require('../middlewares/upload');
const jsons=require('../users.json')
const router = express.Router();
router.route('/user/:username').get((req, res) => {
    let user=jsons;
    if(user.find((obj)=>{   return obj.username===req.params.username})){

    }
        res.end(JSON.stringify(jsons.filter(user=> {
            return user['username']===req.params.username;
        })));
} ).delete((req, res) => {

    for(let i in jsons){
        if(jsons[i]['username']===req.params.username){
            console.log(i);

            jsons.splice(i, 1);
        }
    }
    let datum = JSON.stringify(jsons, null, 2);

    fs.writeFile('./users.json', datum, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });

res.end();

} )

module.exports = router;
