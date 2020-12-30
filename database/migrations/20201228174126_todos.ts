import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('todos', tbl => {
        tbl.increments()
        tbl.string('description').notNullable()
        tbl.date('creationTime').defaultTo(Date())
        tbl.boolean('isDone').defaultTo(false)
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('todos')
}

