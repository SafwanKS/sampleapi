const express = require("express")
const app = express()
const PORT = 1234

app.get('/api/getName', (req, res)=>{
  const name = req.headers['name']
  res.json({name: name})
})


app.listen(
  PORT,
  () => console.log("server is running  on " + PORT)
)
