import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import clientRouter from './routes/clients.route.js';
import commandeRouter from './routes/commande.route.js';
import livreRouter from './routes/livre.route.js';
import jeuRouter from './routes/jeu.route.js';
import filmRouter from './routes/film.route.js';
import { errorHandler } from './middelwares/errorHandler.js';
import { sequelize } from './config/config.js';
import { config } from 'dotenv';

config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/clients', clientRouter);

app.use('/api/commande', commandeRouter);
//app.use('/api/livre', livreRouter);
//app.use('/api/jeu', jeuRouter);
//app.use('/api/film', filmRouter);
//app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});
