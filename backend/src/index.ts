import express from "express"

const app = express();
const PORT = 5000;

app.get("/Home", (req, res, next) => {
  return res.send("Oi...")
});

app.listen(PORT,()=> console.log("RODANDO..."))