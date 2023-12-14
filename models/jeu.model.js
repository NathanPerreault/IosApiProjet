import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';


export const Jeu = sequelize.define('Jeu', {

    idProduct: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    prix: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    details: {
        type: DataTypes.STRING(200),
        allowNull: true
    }


  }, {
    timestamps: false, 
  });
  
  
  export default Jeu;
  