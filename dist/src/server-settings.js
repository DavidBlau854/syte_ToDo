"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(morgan_1.default('dev'));
if (process.env.NODE_ENV === 'production') {
    app.use(helmet_1.default());
}
app.use('/api/todos', todos_1.default);
app.get('/', (req, res) => res.send('API is on /api/todos'));
app.all('*', (req, res) => res.redirect('/'));
exports.default = app;
//# sourceMappingURL=server-settings.js.map