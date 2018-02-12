var express = require('express');
var router = express.Router();
const enviroment = require('../calculation/environment.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enviroment' });
});

router.get('/data', function(req, res, next) {

  enviroment.getData(req.query.date || 'today',function (err,data) {
      if(!err)
        res.send(data);
      else
        console.error(err);
  })
});

module.exports = router;
