var express = require('express');
var { db } = require('../data/db-config.js');
var router = express.Router();

const personController = async (req, res) => {
	try {
		const persons = await db('person');
		return res.status(200).json({ persons });
	} catch (error) {
		res.status(500).json({
			error: `Error retrieving persons: ${error.stack}`,
		});
	}
};

const singlePersonController = async (req, res) => {
	const { personId } = req.params;
	try {
		const person = await db.select('*').from('person')
			.where('PersonId', personId);
		return res.status(200).json(person[0]);
	} catch (error) {
		res.status(500).json({
			error: `Error retrieving person with id '${personId}': ${error.stack}`,
		});
	}
};

router.get('/', personController);
router.get('/person/:personId', singlePersonController);

module.exports = {router, personController, singlePersonController};
