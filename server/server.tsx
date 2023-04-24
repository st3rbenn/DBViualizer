import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/index';
import Router from '../src/lib/api/Router';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'dist')));

// CORS middleware
app.use((req, res, next) => {
  // Enabling CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization',
  );
  next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/v/0.1.0', Router);

app.get('*', (req, res) => {
  const appHtml = renderToString(<App />);
  const indexFile = path.resolve('./dist/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.html:', err);
      return res.status(500).send('Error reading index.html');
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div> <br /> <script src="/client.js"></script>`,
      ),
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
