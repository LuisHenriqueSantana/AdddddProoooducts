const express = require('express');
const fs = require('fs');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// WebSocket Server
const wss = new WebSocket.Server({ noServer: true });

// Endpoint para obter os produtos
app.get('/produtos', (req, res) => {
  // Recarrega os produtos a partir do arquivo JSON
  let produtos = JSON.parse(fs.readFileSync('produtos.json', 'utf8'));
  res.json(produtos);
});

// Endpoint para adicionar um novo produto
app.post('/produtos', (req, res) => {
  const novoProduto = req.body;
  if (!novoProduto.nome || !novoProduto.preco) {
    return res.status(400).json({ error: 'Nome e preço são obrigatórios!' });
  }

  // Lê os produtos atuais
  let produtos = JSON.parse(fs.readFileSync('produtos.json', 'utf8'));

  // Adiciona o novo produto
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
app.server = app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.server.on('upgrade', (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, ws => {
    wss.emit('connection', ws, req);
  });
});
