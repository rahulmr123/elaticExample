var students = require('../services/student');
module.exports = function(req, res) {
  //	var arr=[];
  var promise = students.getStudents();
  promise.then(
    result => {
      var response = {
        status: 200,
        total: result.length,
        result: result,
      };
      res.send(response);
    },
    function(err) {
      res.send(err);
    }
  );
};
