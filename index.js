const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")))


app.use('/api/*', ( _ , res) => { 
    res.json({data: "The API lives here"})
}) 

app.use('*', ( _ , res) => { 
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
}) 

app.listen(port, () => {
    console.log(`server is listening on port:${port}`)
})




// console.log("it's alive")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USER)
// console.log(process.env.REALLY)
// console.log(process.env.GREET)
