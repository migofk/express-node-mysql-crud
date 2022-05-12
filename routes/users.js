var express = require('express');
var router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const Modelclass = require('../db/UsersModel.js');

router.get('/', function(req, res, next) {
  
    let result = Modelclass.get_all();
    result.then( function(value){console.log( value ); res.json( value)})
    .catch( function(error){console.log( error )});

});

router.get('/:id', function(req, res, next) {
  
  let result = Modelclass.find(req.params.id);
  result.then( function(value){console.log( value ); res.json( value)})
  .catch( function(error){console.log( error )});

});

router.post('/',upload.single('photo'), function(req, res, next) {

    data = {first_name: req.body.first_name,last_name: req.body.last_name,email:req.body.email,password: req.body.password,status:req.body.status}
    let result = Modelclass.create(data);
    result.then( function(value){console.log( value ); res.json( value)})
    .catch( function(error){console.log( error )});

});

router.put('/:id',upload.single('photo'), function(req, res, next) {

  data = {first_name: req.body.first_name,last_name: req.body.last_name,email:req.body.email,password: req.body.password,status:req.body.status}
  let result = Modelclass.update(req.params.id,data);
  result.then( function(value){console.log( value ); res.json( value)})
  .catch( function(error){console.log( error )});

});

router.delete('/:id', function(req, res, next) {

  let result = Modelclass.delete(req.params.id);
  result.then( function(value){console.log( value ); res.json( value)})
  .catch( function(error){console.log( error )});

});


module.exports = router;
