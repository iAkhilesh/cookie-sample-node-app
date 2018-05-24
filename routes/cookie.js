var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.cookie('sample-cookie-value','123456789',{httpOnly:true});
    res.send('Cookie Set');
});

router.get('/cookieval',function(req,res,next){
    console.log("Cookie value",req.cookies);
    res.send('Read Cookie Value' + req.cookies);
});

module.exports = router;
