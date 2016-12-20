/**
 * DailyJoke.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    content : { type: 'string' },

    author : { type: 'string' },

    source : { type: 'string' },

    meta : { type: 'json' },

    // relationships
    user: {
      model: 'user'
    }

  }
};

