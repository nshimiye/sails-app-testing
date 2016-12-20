/**
* @Author: mars
* @Date:   2016-12-05T18:42:27-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-05T19:22:21-05:00
*/
'use strict';

// api/services/UtilityService.js
module.exports = {
  runDBQuery(query) {
    return new Promise((resolve, reject) => {
      query.exec(
        function(e, result){
          if(e) {
            return reject(e);
          }
          return resolve(result);
        });

    });
  }
};