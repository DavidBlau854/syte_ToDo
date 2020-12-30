import { expect } from 'chai'
import sinon from 'sinon'
import request from 'supertest'
import Todo from '../../src/entities/Todo'
import { TodoDAO } from '../../src/logic/todos'
import app from '../../src/server-settings'

describe("Todos API integration tests", () => {

    describe(" GET /todos ", () => {
        it("should get all the todos ", async () => {
            //Arrange
            sinon.stub(TodoDAO.prototype, 'getAll').returns(Promise.resolve(exampleTodos))
            //Act
            const result = await request(app).get("/api/todos")
            //Assert
            expect(result.status).to.equal(200)
            expect(JSON.stringify(result.body)).to.equal(JSON.stringify(exampleTodos))
        })
    })

    describe(" POST /todos ", () => {
        it("should call the addTodos method ", async () => {
            //Arrange
            const newTodos: any = [{ description: 'clean room' }]
            const addToDosSpy = sinon.spy(TodoDAO.prototype, 'addTodos')
            //Act
            const result = await request(app).post("/api/todos").send(newTodos)
             //Assert
            expect(result.status).to.equal(201)
            expect(addToDosSpy.calledOnceWith(newTodos)).to.be.true
        })
    })

    afterEach(() => {
        sinon.restore()
    })
})
const todo1 = new Todo('walk the dog')
const todo2 = new Todo('read the book')
const exampleTodos = [todo1, todo2]