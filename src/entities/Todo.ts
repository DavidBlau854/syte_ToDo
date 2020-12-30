export default class Todo {
    public description: string
    public isDone: boolean
    public creationTime: Date
    public id: number
    constructor(description: string, isDone?: boolean, creationTime?: Date, id?: number) {

        this.description = description
        this.isDone = isDone || false
        this.creationTime = creationTime || new Date()
        this.id = id || 1
    }
}