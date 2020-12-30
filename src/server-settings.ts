import express from 'express'
import helmet from 'helmet'
import logger from 'morgan'
import todosRoute from './routes/todos'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

if (process.env.NODE_ENV === 'production') {
    app.use(helmet())
}


app.use('/api/todos', todosRoute)
app.get('/', (req, res) => res.send('API is on /api/todos'))
app.all('*', (req, res) => res.redirect('/'))

export default app