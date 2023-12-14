import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';


export const Jeux = sequelize.define('Jeux', {

    idjeux: {
        type: DataTypes.STRING(20), // Utilisez une longueur adaptée à vos besoins
        primaryKey: true,
        allowNull: false,
        unique: true,
        defaultValue: function () {
            // Générer un identifiant unique basé sur la date, l'heure et la seconde
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().replace(/[-:T.]/g, '').slice(0, -4); // Format : AAAAMMJJHHMMSS
            return `JEU${formattedDate}`;
        },
    },
    titre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
   
    auteur: {
        type: DataTypes.STRING(255),
        allowNull: false,
       
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
    },


    collection: {
        type: DataTypes.ENUM('Oui', 'Non'),
        allowNull: false
    }


  }, {
    timestamps: false, 
  
  });
  
  
  export default Jeux;
  