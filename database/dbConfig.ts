import knex from 'knex'
import config from '../knexfile'

const dbInstance = knex(config.development)

export default dbInstance
