const express = require("express")
const app = express()
const PORT = 1234

app.get('/', (req, res)=>{
  res.send("Hey")
})


app.listen(
  PORT,
  () => console.log("server is running  on " + PORT)
)