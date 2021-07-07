
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        //creates a primary key called id
        tbl.increments();
        tbl.text('make',128).notNullable();
        tbl.text('model',128).notNullable();
        tbl.text('vin',128).unique().notNullable();
        tbl.integer('milage');
        tbl.text('transmission',128);
        tbl.text('title',128);
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  
};
