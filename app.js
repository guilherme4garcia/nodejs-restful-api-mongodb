const customExpress = require('./config/customExpress')
const mongoose = require('mongoose')
require('dotenv/config')


// Conect to DB
mongoose.connect(process.env.DB_CONNECTION, () => 
console.log('connected to DB!'))

const app = customExpress()

app.listen(3000, () => console.log('Servidor Online'))