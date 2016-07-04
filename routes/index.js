var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'cloudefiner' });

});

router.get('/imean', function(req, res, next) {

  res.render('imean', { title: 'imean聊天' });

});

module.exports = router;
