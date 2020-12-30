import Todo from '../entities/Todo'


export interface TodosDataAccessObject {
    getAll: () => Promise<Todo[]>
    addTodos: (todos: Todo[]) => Promise<void>
    deleteOne: (id: number) => Promise<number>
    markAsDone: (id: number) => Promise<void>
    validate: (todos: Todo[]) => void
}

export class TodoDAO implements TodosDataAccessObject {
    db: any;

    constructor(db: any) {
        this.db = db
    }
    getAll(): Promise<Todo[]> {
        return this.db('todos')
    }

    addTodos(todos: Todo[]): Promise<void> {
        this.validate(todos)
        return this.db('todos').insert(todos)
    }

    deleteOne(todoId: number): Promise<number> {
        return this.db('todos').where({ id: todoId }).del()
    }

    markAsDone(todoId: number): Promise<void> {
        return this.db('todos').where({ id: todoId }).update({ isDone: true })
    }

    validate(todos: Todo[]): void {
        todos.forEach((todo, i) => {
            const { description } = todo
            if (!description) {
                throw new Error(`'description' field missing in todo number ${i}`)
            }
        })
    }
}