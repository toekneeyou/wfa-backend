const express = require('express')

console.log(process.env);

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worlds!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})