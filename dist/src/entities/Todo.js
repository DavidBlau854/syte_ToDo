"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    constructor(description, isDone, creationTime, id) {
        this.description = description;
        this.isDone = isDone || false;
        this.creationTime = creationTime || new Date();
        this.id = id || 1;
    }
}
exports.default = Todo;
//# sourceMappingURL=Todo.js.map