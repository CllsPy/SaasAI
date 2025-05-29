import express from "express";
const app = express();
const port = 5000;
app.get('/home', (req, res, next) => {
    res.send('Ping Here');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map