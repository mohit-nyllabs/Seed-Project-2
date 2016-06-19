var express = require('express');
var router = express.Router();

var Message = require('../models/message')

router.post('/', function(req, resp, next){
    var message = new Message({
        content: req.body.content
    });
    messagee.save(function(err, result){
        if(err){
            return res.status(404).json({
                title:'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message:'Saved Message',
            obj: result
        });
    });

});



module.exports = router;