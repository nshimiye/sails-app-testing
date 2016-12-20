/**
 * User.js
 *
 * @description :: 
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    username : { type: 'string' },

    meta : { type: 'json' },
    
    // relationships
    dailyJokes: {
      collection: 'dailyJoke',
      via: 'user'
    }

  }
};

