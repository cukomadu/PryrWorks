let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

//Import Database Structure created in schema.js

let User = require('../db/schema.js').User
let Pryr = require('../db/schema.js').Pryr

//----------------------
//Create Pryr API Routes
//----------------------

apiRouter // write one
.post('/pryrs', function(request, response){
  let newPryr = new Pryr(request.body)
  newPryr.save(function(err){
    if(err){
      return response.json(err)
    }
    response.json(newPryr)
  })
})
.get('/pryrs', function(request, response){ // read all pryrs
  Pryr.find(request.query, function(err, records){
    if(err){
      return response.json(err)
    }
    response.json(records)
  })
})
.get('/myPryrs', function(req, res){ // read only logged user pryrs
  if(request.user){
    Pryr.find({to:request.user.email}, function(err, records){
      if(err){
        return response.json(err)
      }
      response.json(records)
    })
  }
  else {
    response.status(404).json({
      error: 'No User Logged In'
    })
  }
})


//-----------------------
// Create User API Routes
//-----------------------
  apiRouter // read all users information
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err) 
        res.json(results)
      })
    })

  apiRouter // read one user information
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err) 
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){ // update one user information
      User.findById(req.params._id, "-password",function(err, record){
        if(err || !record) return res.json(err)
        let recordWithUpdates = helpers.updateFields(record, req.body)
        recordWithUpdates.save(function(err){
          if(err) return res.json(err) 
          res.json(recordWithUpdates)
        })
      })
    })
    .delete('/users/:_id', function(req, res){ // delete one user information
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })  
    })

    


module.exports = apiRouter