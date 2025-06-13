import express from "express";
const app = express();
const PORT = 5000;
app.use(express.json());
app.post("/Home", (req, res, next) => {
    console.log(req.body.name);
    return res.send("Oi...");
});
app.listen(PORT, () => console.log("RODANDO..."));
//# sourceMappingURL=index.js.map