import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';


export const Client = sequelize.define('Client', {
    idclient: {
        type: DataTypes.STRING(20), 
        primaryKey: true,
        allowNull: false,
        unique: true,
        defaultValue: function () {
            
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().replace(/[-:T.]/g, '').slice(0, -4); // Format : AAAAMMJJHHMMSS
            return `CLT${formattedDate}`;
        },
    },


    nom: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    courriel: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    telephone: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    adresse: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    photo: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }



  }, {
    timestamps: false, 

  
  });
  
  
  export default Client;
  