
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import clientRouter from './routes/client.route.js';
import produitRouter from './routes/produit.route.js';
import filmtRouter from './routes/film.route.js';
import livretRouter from './routes/livre.route.js';
import jeuxRouter from './routes/jeux.route.js';
import panierRouter from './routes/panier.route.js';
import commandeRouter from './routes/commande.route.js';
import employerRouter from './routes/employer.route.js';
import { errorHandler } from './middelwares/errorHandler.js';
import authRouter from './routes/auth.routes.js'
import { sequelize } from './config/config.js';

import { config } from 'dotenv';

config();

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());


app.use('/api/produits', produitRouter);
app.use('/api/film', filmtRouter);
app.use('/api/livre', livretRouter);
app.use('/api/jeux', jeuxRouter);
app.use('/api/clients', clientRouter);
app.use('/api/commande', commandeRouter);
app.use('/api/panier', panierRouter);
app.use('/api/employer', employerRouter);
app.use('/api/auth', authRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});
