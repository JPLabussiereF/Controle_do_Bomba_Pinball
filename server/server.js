const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/command", (req, res) => {
    const command = req.body.command;
    console.log(`Comando recebido: ${command}`);

    // Simulando resposta do ESP32
    res.json({ status: "Comando recebido", command });
});

app.listen(port, () => {
    console.log(`Servidor ESP32 simulado rodando em http://localhost:${port}`);
});

// Para rodar o servidor, use o seguinte comando no terminal:
// node server/server.js