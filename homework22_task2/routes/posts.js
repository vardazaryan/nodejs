const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {

    let data=new Date();
    res.end(`${data}`);
}).post((req, res) => {
    let data=new Date();

    res.end(`${data}`);

}).put((req, res) => {
    let data=new Date();
    res.end(`${data}`);
}).delete((req, res) => {
    let data=new Date();
    res.end(`${data}`);
});

router.route('/:id').get((req, res) => {
    let data=new Date();
    res.end(`${data}`);
}).delete((req, res) => {
    let data=new Date();
    res.end(`${data}`);
});

module.exports = router;
