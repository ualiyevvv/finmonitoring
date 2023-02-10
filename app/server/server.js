const dotenv = require('dotenv').config()
const path = require('path')


const express = require('express')
const app = express()

app.use(require('cors'))


/** Body Parser */
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

