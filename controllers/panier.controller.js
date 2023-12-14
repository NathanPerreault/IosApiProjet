// Importez le modèle Panier
import Panier from '../models/panier.model.js';



export const createPanier = async (req, res) => {
    try {
        // Validation des données entrantes (req.body) peut être ajoutée ici
        const newPanier = await Panier.create(req.body);
        res.status(201).json(newPanier);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du Panier", error: error.message });
    }
};

// Obtenir tous les Paniers
export const getAllPanier = async (req, res) => {
    try {
        const newPanier = await Panier.findAll();
        res.status(200).json(newPanier);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des Paniers", error: error.message });
    }
};


// Obtenir un Panier par ID
export const getPanierById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const newPanier = await Panier.findByPk(idProduit);
        if (newPanier) {
            res.status(200).send(newPanier);
        } else {
            res.status(404).send({ message: 'Panier non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un Panier



export const deletePanier = async (req, res, next) => {
    try {
      const newPanier = await Panier.findByPk(req.params.id);
      if (newPanier) {
        await newPanier.destroy();
        res.status(200).json({ message: 'Produit deleted' });
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };



// Mettre à jour un Panier


export const updatePanier = async (req, res, next) => {
    try {
      const newPanier = await Panier.findByPk(req.params.id);
      if (newPanier) {
        await newPanier.update(req.body);
        res.status(200).json(newPanier);
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };







// Contrôleur pour la création d'une nouvelle entrée dans le panier
// export const createPanier = async (req, res) => {
//     try {
//         // Récupérez les données du corps de la requête
//         const { typeProduit, idProduitLivre, idProduitFilm, idProduitPanier, quantite } = req.body;

//         // Créez une nouvelle instance de Panier avec les données fournies
//         const panier = await Panier.create({
//             typeProduit,
//             idProduitLivre,
//             idProduitFilm,
//             idProduitPanier,
//             quantite,
//         });

//         // Renvoyez la réponse avec la nouvelle instance du panier
//         return res.status(201).json(panier);
//     } catch (error) {
//         // Gérez les erreurs, renvoyez une réponse appropriée
//         console.error('Erreur lors de la création du panier :', error);
//         return res.status(500).json({ error: 'Erreur lors de la création du panier' });
//     }
// };
