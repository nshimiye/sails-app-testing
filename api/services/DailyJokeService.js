/**
* @Author: mars
* @Date:   2016-12-05T18:42:27-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-05T20:44:30-05:00
*/
'use strict';
var oneLinerJoke = require('one-liner-joke');

// api/services/DailyJokeService.js
module.exports = {
  getRandom() {
    return new Promise(resolve => {
      let content = oneLinerJoke.getRandomJoke().body,
          author = oneLinerJoke.getRandomJoke().tags[0],
          source = 'https://github.com/faiyaz26/one-liner-joke';
      resolve({ content, author, source });
    });
  }
};