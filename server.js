const express = require("express")
const app = express()
const PORT = 1234

app.get('/api/askAi', (req, res)=>{
  const prompt = req.headers['prompt']

const GoogleGenerativeAI = require("@google/generative-ai");

const apiKey = "AIzaSyDrBOFOSO5lGJiv2CpsnysXYhxamwD8rj8"
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});
  async function run(){
const result = await model.generateText("Hey");
const airesponse = result.text()
  console.log(airesponse)
  res.json({response: airesponse})
  }
  run()
})


app.listen(
  PORT,
  () => console.log("server is running  on " + PORT)
)
