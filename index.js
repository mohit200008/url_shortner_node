const express = require('express')
const urlRoute = require("./routes/url")
const { connectMongodb } = require('./connection')

const app = express();
const PORT = 8002

connectMongodb('mongodb+srv://mohit:admin@url.sywvn.mongodb.net/?retryWrites=true&w=majority&appName=url')
.then(() => console.log("Mongodb connected"))
.catch((err) => console.log(err))

app.use(express.json())

app.use('/url', urlRoute)

app.listen(PORT, () => console.log(`server listening at port ${PORT}`))