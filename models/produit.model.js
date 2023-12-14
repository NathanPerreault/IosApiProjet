import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';


export const Produit = sequelize.define('Produit', {

    idProduit: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    titre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    prix: {
        type: DataTypes.DECIMAL(10, 2),
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
  
  
  
  export default Produit;
  