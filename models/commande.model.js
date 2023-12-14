import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import Panier from './panier.model.js';
import Client from './client.model.js';
import User from './user.model.js';
export const Commande = sequelize.define('Commande', {
    idcommande: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
    titre: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
    prix: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    iduser: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'iduser', 
        },
    },
    etat: {
        type: DataTypes.ENUM('Incomplete', 'Payé', 'Expédiée', 'Livré'),
        allowNull: true,
    },



  }, {
    timestamps: false, 
  });
  
  
  export default Commande;
  