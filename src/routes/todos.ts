import { Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { TodoDAO } from '../logic/todos'
import { IPostRequest } from '../entities/Requests'

import dbInstance from '../../database/dbConfig'

const router = Router()
const todoDAO = new TodoDAO(dbInstance)

router.get('/', async (req: Request, res: Response) => {
    const ans = await todoDAO.getAll()
    return res.status(StatusCodes.OK).json(ans)
})

router.post('/', async (req: IPostRequest, res: Response) => {
    const todoArray = req.body
    try {
        await todoDAO.addTodos(todoArray)
        return res.status(StatusCodes.CREATED).end();
    } catch (e) {
        return res.status(StatusCodes.BAD_REQUEST).send(e.message)
    }
})

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        await todoDAO.deleteOne(Number(id))
        return res.status(StatusCodes.OK).end();
    } catch (e) {
        return res.status(StatusCodes.BAD_REQUEST).send(e.message)
    }
})

router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        await todoDAO.markAsDone(Number(id))
        return res.status(StatusCodes.OK).end();
    } catch (e) {
        return res.status(StatusCodes.BAD_REQUEST).send(e.message)
    }

})


export default router
