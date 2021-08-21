const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  } else if (req.method === 'POST') {
    const someBody = [];

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
    });

    req.on('data', (data) => {
      someBody.push(Buffer.from(data));
    });

    req.on('end', () => {
      const message = someBody.toString().split('=')[1];
      res.end(`
        <h1>Thanks, your message was sent!!!</h1>
        <h3>Your message is: ${message}</h3>
      `);
    });
  }

  if (req.url === '/') {
    fs.readFile(
      path.join(__dirname, 'views', 'index.html'),
      'utf-8',
      (err, content) => {
        if (err) {
          throw err;
        }
        res.end(content);
      }
    );
  } else if (req.url === '/about') {
    fs.readFile(
      path.join(__dirname, 'views', 'about.html'),
      'utf-8',
      (err, content) => {
        if (err) {
          throw err;
        }
        res.end(content);
      }
    );
  } else if (req.url === '/contacts') {
    fs.readFile(
      path.join(__dirname, 'views', 'contacts.html'),
      'utf-8',
      (err, content) => {
        if (err) {
          throw err;
        }
        res.end(content);
      }
    );
  } else if (req.url === '/product') {
    fs.readFile(
      path.join(__dirname, 'views', 'product.html'),
      'utf-8',
      (err, content) => {
        if (err) {
          throw err;
        }
        res.end(content);
      }
    );
  } else if (req.url === '/service') {
    fs.readFile(
      path.join(__dirname, 'views', 'service.html'),
      'utf-8',
      (err, content) => {
        if (err) {
          throw err;
        }
        res.end(content);
      }
    );
  }
});

server.listen(3000, () => {
  console.log('Server is running...');
});
