const express = require("express")
const app = express()
const PORT = 1234

app.get('/api/getName', (req, res)=>{
  const mapHeader = req.headers[]
  res.send(mapHeader.name);
})


app.listen(
  PORT,
  () => console.log("server is running  on " + PORT)
)
