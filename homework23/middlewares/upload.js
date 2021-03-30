const multer = require('multer');
const mimeType = require('mime-types');
const fs = require('fs');
const random=require('random');
const  randomName=random.int((min = 100000), (max = 999999));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Homeworks/upload/')


    },
    filename: function (req, file, cb) {


        cb(null, randomName + '.' + mimeType.extension(file.mimetype));
    }
});

module.exports = multer({storage: storage});
