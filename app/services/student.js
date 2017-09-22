const client = require('../../config/connect.js');
// module.exports.getStudents = callback => {
//   client.search(
//     {
//       q: '*',
//     },
//     callback
//   );
// };
getStudents = function() {
  var arr = [];

  console.log('fun');
  return new Promise(function(resolve, reject) {
    console.log('new promise');
    client.search(
      {
        // 'index':'gov',

        q: 'rahul',
      },
      (err, res, status) => {
        if (err) {
          reject(err);
        } else {
          res.hits.hits.map(student => {
            arr.push(student._source);
          });
          resolve(arr);
        }
      }
    );
  });
};
function postUser(details) {
  console.log(details);
  return new Promise((resolve, reject) => {
    client.index(
      {
        index: 'student',
        type: 'stu',
        body: {
          username: details.username,
          userid: details.userid,
        },
      },
      (err, res, status) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
}
module.exports = {
  getStudents: getStudents,
  postUser: postUser,
};
