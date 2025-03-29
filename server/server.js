const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/command", (req, res) => {
    console.log("Comando recebido:", req.body.command);
    res.send({ status: "Comando recebido" });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});