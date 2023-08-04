const express = require('express')
const app = express()

app.get('/', (req, res)=> {
  res.send("Hosted Successfully!\nHow are you feelin?")
})

app.listen(6000, () => {
  console.log("App is running on 6000!")
})