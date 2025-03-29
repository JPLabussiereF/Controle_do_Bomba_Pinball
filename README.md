# 🌐 Servidor Web para ESP32

Este projeto consiste em um **servidor web** desenvolvido em Node.js, que futuramente será utilizado para configurar o **ESP32 como um servidor web**. 

## 📌 Descrição do Projeto
O objetivo deste projeto é criar um ambiente de comunicação entre um servidor web local e um ESP32. No futuro, ele permitirá o controle e a configuração do ESP32 via uma interface web.

## 🚀 Tecnologias Utilizadas
- **HTML5, CSS3 e JavaScript** (Interface web interativa)
- **Node.js e Express** (Servidor backend para comunicação)
- **CORS** (Para permitir comunicação entre frontend e backend)

## 📂 Estrutura do Projeto
```
ServidorWebESP32/
│── assets/
│   │── background.jpg  # Imagem de fundo
│   │── soccer-ball.png # Imagem da bola de futebol
│── js/
│   │── script.js       # Lógica do frontend
│   │── node_modules/   # Módulos do Node.js
│── server/
│   │── server.js       # Servidor Node.js para comunicação com ESP32
│── styles/
│   │── style.css       # Estilização da interface
│── .gitignore         # Arquivos ignorados pelo Git
│── index.html         # Interface web
│── package-lock.json  # Dependências travadas do Node.js
│── package.json       # Dependências do Node.js
│── README.md          # Documentação do projeto
```

## 🌍 Como Rodar o Projeto
### 1️⃣ Rodar o Servidor Web
1. **Instale o Node.js** se ainda não tiver ([Baixar Node.js](https://nodejs.org/)).
2. **No terminal, na pasta do projeto, execute:**
   ```sh
   npm install
   node server/server.js
   ```
3. O servidor rodará em `http://localhost:3000`.

### 2️⃣ Testar a Interface Web
1. **Abra `index.html` no navegador**.
2. **Interaja com a interface para enviar comandos ao servidor**.
3. **Veja os comandos recebidos no terminal do servidor**.

## 🔧 Melhorias Futuras
- [ ] Integração com ESP32.
- [ ] Controlar o ESP32 via interface web.
- [ ] Feedback visual para os comandos enviados.
- [ ] Monitoramento de sensores do ESP32.

---
💡 **Dúvidas ou sugestões? Fale comigo!** 😃🌐⚡

