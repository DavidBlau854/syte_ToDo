// Update with your config settings.

export default {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/todos.db3'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seedData'
    },
    useNullAsDefault: true
  },
}