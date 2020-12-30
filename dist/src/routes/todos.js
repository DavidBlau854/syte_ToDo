"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const todos_1 = require("../logic/todos");
const dbConfig_1 = __importDefault(require("../../database/dbConfig"));
const router = express_1.Router();
const todoDAO = new todos_1.TodoDAO(dbConfig_1.default);
router.get('/', async (req, res) => {
    const ans = await todoDAO.getAll();
    return res.status(http_status_codes_1.StatusCodes.OK).json(ans);
});
router.post('/', async (req, res) => {
    const todoArray = req.body;
    try {
        await todoDAO.addTodos(todoArray);
        return res.status(http_status_codes_1.StatusCodes.CREATED).end();
    }
    catch (e) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(e.message);
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await todoDAO.deleteOne(Number(id));
        return res.status(http_status_codes_1.StatusCodes.OK).end();
    }
    catch (e) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(e.message);
    }
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await todoDAO.markAsDone(Number(id));
        return res.status(http_status_codes_1.StatusCodes.OK).end();
    }
    catch (e) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(e.message);
    }
});
exports.default = router;
//# sourceMappingURL=todos.js.map