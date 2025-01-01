const express = require('express');
const fs = require('fs');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https'); // Importando o módulo https
const path = require('path');

const app = express();
const port = 3000;

// Carregar certificados SSL (em produção, você precisa de certificados válidos)
const options = {
  key: fs.readFileSync('caminho/para/chave-privada.pem'),
  cert: fs.readFileSync('caminho/para/certificado.crt'),
};

const server = https.createServer(options, app); // Usar o servidor HTTPS

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// WebSocket Server
const wss = new WebSocket.Server({ noServer: true });

// Carrega os produtos do arquivo JSON
let produtos = JSON.parse(fs.readFileSync('produtos.json', 'utf8'));

// Endpoint para obter os produtos
app.get('/produtos', (req, res) => {
  res.json(produtos);
});

// Endpoint para adicionar um novo produto
app.post('/produtos', (req, res) => {
  const novoProduto = req.body;
  if (!novoProduto.nome || !novoProduto.preco) {
    return res.status(400).json({ error: 'Nome e preço são obrigatórios!' });
  }

  produtos.push(novoProduto);

  // Atualiza o arquivo JSON
  fs.writeFileSync('produtos.json', JSON.stringify(produtos, null, 2));

  // Notifica os clientes via WebSocket
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ tipo: 'atualizacao', produtos }));
    }
  });

  res.status(201).json({ message: 'Produto adicionado com sucesso!' });
});

// Servidor WebSocket
server.on('upgrade', (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, ws => {
    wss.emit('connection', ws, req);
  });
});

// Iniciar o servidor HTTPS
server.listen(port, () => {
  console.log(`Servidor HTTPS rodando em https://localhost:${port}`);
});
