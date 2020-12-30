import { Request } from "express";
import Todo from "./Todo";

export interface IPostRequest extends Request {
    body: Todo[]
}