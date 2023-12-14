import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';


export const Client = sequelize.define('Client', {

    idClient: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
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
    tableName: 'Client' 
  });
  
  
  export default Client;
  