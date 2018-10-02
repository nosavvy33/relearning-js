var express = require('express');
var router = express.Router();

//Authentication middleware
var loggedin = (req,res,next) => {
  if(req.isAuthenticated()){
    next()
  }else{
    res.redirect('/login')
  }
}
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res) {
  res.render('login');
});
router.get('/signup', function(req, res) {
  res.render('signup');
});
router.get('/profile',loggedin ,function(req, res) {
  res.send(req.session);
});

router.get('/logout', (req,res) => {
  req.logout()
  res.send('/')
})

module.exports = router;
