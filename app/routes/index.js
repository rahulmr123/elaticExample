var student=require('../controllers/student');
var googleLogin = require('../controllers/user')
module.exports=function(app){
  console.log("apppppp")
app.get('/students',student);
app.post('/google',googleLogin)

}