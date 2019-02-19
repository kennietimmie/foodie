import express from 'express'
import bodyParser from 'body-parser'

// routes
import mealRouter from './routes/meal'
import orderRouter from './routes/order'
import menuRouter from './routes/menu'

const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api/v1/meals', mealRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/menus', menuRouter)

//  App encounter error

app.use((req, res, next) => {
  res.status(404).json({
    status: res.statusCode,
    message: 'Wrong route, not found'
  })
  next()
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

export default app
