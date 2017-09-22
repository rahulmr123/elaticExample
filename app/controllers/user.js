var student = require('../services/student')
module.exports = function(req,res){console.log("dfsd",req.body)
  var details={
    username : req.body.username,
    userid : req.body.userid
  }

var promise = student.postUser(details)
promise.then((result)=>{
 console.log("====>",result)
    res.send(result)
  
},function(err){
  res.send(err)
})



}