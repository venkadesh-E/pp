const express = require('express');

const app = express();

const cors=require("cors")

const router = require('./routes/routes')

require('./models/db')
app.use(express.json())
app.use(cors())
app.use('/api/task' , router)

app.listen('8000' , err => {
    if(err) console.log(err)
    console.log('Server is started at PORT number : 8000')
})