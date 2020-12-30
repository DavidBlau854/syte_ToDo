"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoDAO = void 0;
class TodoDAO {
    constructor(db) {
        this.db = db;
    }
    getAll() {
        return this.db('todos');
    }
    addTodos(todos) {
        this.validate(todos);
        return this.db('todos').insert(todos);
    }
    deleteOne(todoId) {
        return this.db('todos').where({ id: todoId }).del();
    }
    markAsDone(todoId) {
        return this.db('todos').where({ id: todoId }).update({ isDone: true });
    }
    validate(todos) {
        todos.forEach((todo, i) => {
            const { description } = todo;
            if (!description) {
                throw new Error(`'description' field missing in todo number ${i}`);
            }
        });
    }
}
exports.TodoDAO = TodoDAO;
//# sourceMappingURL=todos.js.map