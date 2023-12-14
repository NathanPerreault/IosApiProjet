import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';


export const LigneCommande = sequelize.define('LigneCommande', {
    
    idProduit: {
        type: DataTypes.CHAR(8),
        primaryKey: true,
    },
    numeroCommande: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    prixReel: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },


  }, {
    timestamps: false, 
  });
  
  
  export default Livre;
  