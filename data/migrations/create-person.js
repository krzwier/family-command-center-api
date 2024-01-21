const up = (knex) => {
	return knex.schema.createTable('person', (tbl) => {
		tbl.integer('PersonId').notNullable();
		tbl.text('PersonName').notNullable();
		tbl.text('AvatarPath').notNullable();
	});
};

const down = (knex) => {
	return knex.schema.dropTableIfExists('person');
};

module.exports = {up, down};