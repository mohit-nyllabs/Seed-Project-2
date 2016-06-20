var express = require('express');
var router = express.Router();

var Message = require('../models/message')

router.get('/', function(req, res, next){
    // dont execute this and execute previous to this
    Message.find()
        .exec(function(err, docs){
            if(err){
                return res.status(404).json({
                    title: ' An Error occured',
                    error: err
                });

            }
            res.status(200).json({
                message: 'Success',
                obj: docs
            });
        });
});



router.post('/', function(req, res , next){
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result){
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

// patch to change the content
router.patch('/:id', function(req, res, next){

    Message.findById(req.params.id, function(err,doc){
        if(err){
            return res.status(404).json({
                title:'An error occured',
                error: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title:'No Document found',
                error: {message: ' Message couldnt be found'}
            });
        }
        doc.content = req.body.content; // it will contain the data that I want to overwrite
        doc.save(function(err, result){
            if(err){
                return res.status(404).json({
                    title:'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Succes',
                obj: result
            })
        }); // Mongoose doesnt create and overwrite the old content ..
    })
});

router.delete('/:id', function(req, res, next){

    Message.findById(req.params.id, function(err,doc){
        if(err){
            return res.status(404).json({
                title:'An error occured',
                error: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title:'No Document found',
                error: {message: ' Message couldnt be found'}
            });
        }

        doc.remove(function(err, result){
            if(err){
                return res.status(404).json({
                    title:'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Succes',
                obj: result
            })
        });
    })
});



module.exports = router;