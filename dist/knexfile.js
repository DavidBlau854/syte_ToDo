"use strict";
// Update with your config settings.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
};
//# sourceMappingURL=knexfile.js.map