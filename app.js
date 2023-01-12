const express = require(`express`)
const app = express()
const mongoose = require(`mongoose`)
const port = 3000 || process.env.port

require('dotenv').config()
app.use(express.json())
app.use(require(`./router/router`))

mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://127.0.0.1:27017/resets`,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})