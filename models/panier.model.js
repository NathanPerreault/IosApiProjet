import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import Livre from './livre.model.js';
import Film from './film.model.js';
import Jeux from './jeux.model.js';
import Client from './client.model.js';
import User from './user.model.js';

export const Panier = sequelize.define('Panier', {
    idpanier: {
        type: DataTypes.STRING(20), 
        primaryKey: true,
        allowNull: false,
        unique: true,
        defaultValue: function () {
            
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().replace(/[-:T.]/g, '').slice(0, -4); // Format : AAAAMMJJHHMMSS
            return `PAN${formattedDate}`;
        },
    },
    typeProduit: {
        type: DataTypes.ENUM('Livre', 'Film', 'Jeux'),
        allowNull: false
    },
    idlivre: {
        type: DataTypes.STRING(20),
        allowNull: true,
        references: {
            model: Livre,
            key: 'idlivre', 
        },
    },
    idfilm: {
        type: DataTypes.STRING(20),
        allowNull: true,
        references: {
            model: Film,
            key: 'idfilm', 
        },
    },
    idjeux: {
        type: DataTypes.STRING(20),
        allowNull: true,
        references: {
            model: Jeux,
            key: 'idjeux', // Assurez-vous que c'est la clé primaire correcte dans Jeux
        },
    },
    iduser: {
        type: DataTypes.INTEGER(20),
        allowNull: true,
        references: {
            model: User,
            key: 'iduser', // Assurez-vous que c'est la clé primaire correcte dans Client
        },
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },


    // titrefilm: {
    //     type: DataTypes.STRING(20),
    //     allowNull: true,
    //     references: {
    //         model: Film,
    //         key: 'titre', 
    //     },
    // },

    // titrejeux: {
    //     type: DataTypes.STRING(20),
    //     allowNull: true,
    //     references: {
    //         model: Jeux,
    //         key: 'titre', 
    //     },
    // },
    // titrelivre: {
    //     type: DataTypes.STRING(20),
    //     allowNull: true,
    //     references: {
    //         model: Livre,
    //         key: 'titre', 
    //     },
    // },
    // imagefilm: {
    //     type: DataTypes.STRING(255),
    //     allowNull: true,
    //     references: {
    //         model: Film,
    //         key: 'image', 
    //     },
    // },


    // imagelivre: {
    //     type: DataTypes.STRING(255),
    //     allowNull: true,
    //     references: {
    //         model: Livre,
    //         key: 'image', 
    //     },
    // },

    // imagejeux: {
    //     type: DataTypes.STRING(255),
    //     allowNull: true,
    //     references: {
    //         model: Jeux,
    //         key: 'image', 
    //     },
    // },


    
}, {
    timestamps: false,
});

export default Panier;

  