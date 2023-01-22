const express = require('express')
const path = require('path')
const recordsRouter = require('./routes/records')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', recordsRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})