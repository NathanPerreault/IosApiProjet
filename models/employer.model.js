import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';


export const Employer = sequelize.define('Employer', {

    // idClient: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    matricule: {
        type: DataTypes.STRING(255),
        allowNull: false
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
 
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }



  }, {
    timestamps: false, 
  });
  
  
  export default Employer;
  