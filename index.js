const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! 38')
})

app.get("/login", (req, res) => {
    res.send("Login")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})