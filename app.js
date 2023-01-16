const express = require(`express`)
const app = express()
const mongoose = require(`mongoose`)

require('dotenv').config()
app.use(express.json())
app.use(require(`./router/router`))

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DBNAME,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.listen(
    process.env.PORT, 
    ()=> 
        console.log(`http://localhost:${process.env.PORT}`)
        )