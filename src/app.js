import 'dotenv/config';

import express from 'express';
import { join, resolve } from 'path';

import routes from './routes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', join(__dirname, '/views'));

app.use(express.static(resolve(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use('*', (req, res) => {
  return res.status(404).send('404 - Page not found!');
});

const port = process.env.PORT;
app.listen(port, () => console.info(`Server 👂listening on ⚓port ${port}...`));
