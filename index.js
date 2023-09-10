const express = require('express')
const app = express()

app.get('/test', (req, res)=> {
  res.send("Hosted Successfully!\nHow are you feelin?")
})

app.listen(8000, () => {
  console.log("App is running on 8000!")
})
