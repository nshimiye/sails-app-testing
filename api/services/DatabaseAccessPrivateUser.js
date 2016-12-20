/**
* @Author: mars
* @Date:   2016-12-05T18:46:22-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-05T20:14:39-05:00
*/
'use strict';

// api/services/DatabaseAccessPrivateUser.js
exports.main = {

  /**
   * @param id string userid
   * @param jokeData { content: string, author: string, source: string }
   * @return Promise<newJoke>
   */
  userSaveJoke(id, jokeData) {
    // @TODO validate jokeData

    return UtilityService.runDBQuery(
      User.findOne({ id }).populate('dailyJokes')
    )
    .then(foundUser => {
      foundUser.dailyJokes.add(jokeData);
      return this.updateUser(foundUser)
      .then(( /* user */ ) => Promise.resolve(jokeData));
    })
    .then(joke => {
      sails.log.info('userSaveJoke', joke);
      return joke; // => { user, content, author, source }
    });
  },

  updateUser(user) {
    return new Promise((resolve, reject) => {

      user.save(function(err){
        if (err) { return reject(err); }
        return resolve(user);
      });

    });
  }

};