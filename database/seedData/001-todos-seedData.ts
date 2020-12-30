import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("todos").del();

    // Inserts seed entries
    await knex("todos").insert([
        { description: "clean the house" },
        { description: "walk the dog" },
        { description: "cook for the weekend" },
    ]);
};
