/**
* @Author: mars
* @Date:   2016-12-05T18:46:22-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-05T19:14:40-05:00
*/
'use strict';
let UserAccess = require('./DatabaseAccessPrivateUser.js').main;

// api/services/DatabaseAccessService.js
const service = Object.assign({}, UserAccess);
module.exports = service;