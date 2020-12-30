import { expect } from 'chai'
import sinon from 'sinon'
import Todo from '../../src/entities/Todo'
import { TodoDAO } from '../../src/logic/todos'

describe('Todo Data access Object unit tests', () => {
    describe('getAll', () => {
        it('should call the db instance with the right table', async () => {
            //Arrange
            let dbSpy = sinon.spy()
            let todoDAO = new TodoDAO(dbSpy)
            //Act
            await todoDAO.getAll()
            //Assert
            expect(dbSpy.calledOnceWith('todos')).to.be.true
        })
    })
    describe("addTodos", () => {
        it("should call validate function ", async () => {
            //Arrange
            const dbStub = sinon.stub()
            dbStub.returns({ insert: () => { } })
            const todoDAO = new TodoDAO(dbStub)
            const validateSpy = sinon.spy(todoDAO, 'validate')
            //Act
            await todoDAO.addTodos(exampleTodos)
            //Assert
            expect(validateSpy.calledOnceWith(exampleTodos)).to.be.true
        })
        it("should call insert with the recieved todos", async () => {
            //Arrange
            const dbStub = sinon.stub()
            const insertSpy = sinon.spy()
            dbStub.returns({ insert: insertSpy })
            const todoDAO = new TodoDAO(dbStub)
            //Act
            await todoDAO.addTodos(exampleTodos)
            //Assert
            expect(insertSpy.calledOnceWith(exampleTodos)).to.be.true
        })
    })

    describe("validate", () => {
        it("should throw error if a description field is missing  ", () => {
            //Arrange
            const invalidToDo: any = [{ someString: 1 }]
            const todoDAO = new TodoDAO({})
            //Act + Assert
            expect(() => todoDAO.validate(invalidToDo)).to.throw(
                `'description' field missing in todo number 0`)
        })
    })
})


const exampleTodos = [
    new Todo('walk the dog'),
    new Todo('read the book')
]

