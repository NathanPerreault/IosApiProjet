import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import Produit from '../models/produit.model.js'

export const Film = sequelize.define('Film', {
    idfilm: {
        type: DataTypes.STRING(20), // Utilisez une longueur adaptée à vos besoins
        primaryKey: true,
        allowNull: false,
        unique: true,
        defaultValue: function () {
            // Générer un identifiant unique basé sur la date, l'heure et la seconde
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().replace(/[-:T.]/g, '').slice(0, -4); // Format : AAAAMMJJHHMMSS
            return `FIL${formattedDate}`;
        },
    },
    titre: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    acteur: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    realisateur: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(255)
    },
    videoExtrait: {
        type: DataTypes.STRING(2083),
        allowNull: false
    },
   
    prix: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255)
    },
   
    quantiteEnStock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantiteMinStock: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    },
    etat: {
        type: DataTypes.ENUM('Actif', 'Inactif'),
        allowNull: false
    }



  }, {
    timestamps: false, 
 
  });
  
 
  export default Film;
  