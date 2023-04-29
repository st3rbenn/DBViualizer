import express from 'express';
import path from 'path';
import fs from 'fs';
import { corsMiddleware } from '../src/lib/api/middleware/cors.middleware';
import Router from '../src/lib/api/Router';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'dist')));

app.use(corsMiddleware);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/v/0.1.0', Router);

app.get('*', (req, res) => {
  const indexFile = path.resolve('./dist/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.html:', err);
      return res.status(500).send('Error reading index.html');
    }

    return res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
