/* eslint-disable no-undef */
var knex = require('knex');
var config = require('../knexfile.js');

let db = null;
if (process.env.NODE_ENV === 'test') {
	db = knex(config.test);
} else {
	db = knex(config.production);
}

module.exports = { db };
