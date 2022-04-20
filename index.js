const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())

app.get('/',(req, res)=>{
    res.send("Hello World Test UMCTH")
})

app.listen(PORT, () => {
    console.log("Server is running");
})