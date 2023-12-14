import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';


export const Livre = sequelize.define('Livre', {

    idlivre: {
        type: DataTypes.STRING(20), // Utilisez une longueur adaptée à vos besoins
        primaryKey: true,
        allowNull: false,
        unique: true,
        defaultValue: function () {
            // Générer un identifiant unique basé sur la date, l'heure et la seconde
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().replace(/[-:T.]/g, '').slice(0, -4); // Format : AAAAMMJJHHMMSS
            return `LIV${formattedDate}`;
        },
    },
   
    auteur: {
        type: DataTypes.STRING(200),
        allowNull: true
    },
    editeur: {
        type: DataTypes.STRING(200),
        allowNull: true
    },
    
    dateParution: {
        type: DataTypes.DATE,
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING(13),
        allowNull: false
    },
    titre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    prix: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255)
    },
    image: {
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
  
  
  export default Livre;
  