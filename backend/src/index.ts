import express from "express"

const app = express();
const PORT = 5000;

// middlewares
app.use(express.json());

// connection & listeners
app.listen(PORT,()=> console.log("Servidor Online..."))