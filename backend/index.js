const express = require('express')
const cors = require('cors')
const path = require('path')
const routers = require('./routes/routers')
const bodyParser = require('body-parser');

const exphbs = require('express-handlebars')
// const dataController = require('./controllers/dataController')


const app = express()
const hbstest = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

// app.engine('hbs', hbstest.engine)
// app.set('view engine', 'hbs')
// app.set('views', path.join(__dirname, 'views'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json())

app.use(cors())
// app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use('/', dataController.viewappp)
app.use('/api', routers)
// app.use('/api/data/between', dataController.between)


const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()