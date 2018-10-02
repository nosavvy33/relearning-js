var express = require('express');
var router = express.Router();
var User = require('../db/User')

module.exports = function(passport){
    router.post('/signup', function(req, res) {
        var body = req.body, username = body.username, password = body.password;
        User.findOne({username:username}, (err,doc) => {
            if(err){res.status(500).send('error ocurred')}
            else{
                if(doc){
                    res.status(500).send('User already exists!')
                }else{
                    var record = new User()
                    record.username = username
                    record.password = record.hashPassword(password)
                    record.save((err,user)=>{
                        if(err){res.status(500).send('db error')
                        }else{
                            res.send(user)
                        }
                    })
                }
            }
        })
    });
    router.post('/login',passport.authenticate('local',{
        failureRedirect:'/login',
        successRedirect:'/profile'
    }), (req,res) => {
        res.send('hey')
    })
    return router
}
