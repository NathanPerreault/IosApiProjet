// Importez le modèle Commande
import Commande from '../models/commande.model.js';



export const createCommande = async (req, res) => {
  try {
      // Validation des données entrantes (req.body) peut être ajoutée ici

      // Assurez-vous que req.body est un tableau
      if (!Array.isArray(req.body)) {
          return res.status(400).json({ message: "Le corps de la requête doit être un tableau" });
      }

      // Créez un tableau pour stocker les nouvelles commandes créées
      const newCommandes = [];

      // Parcourez le tableau req.body et créez chaque commande
      for (const commandeData of req.body) {
          try {
              const newCommande = await Commande.create(commandeData);
              newCommandes.push(newCommande);
          } catch (validationError) {
              // Affichez les erreurs de validation
              console.error("Erreur de validation :", validationError.errors);
              return res.status(400).json({ message: "Erreur de validation", errors: validationError.errors });
          }
      }

      res.status(201).json(newCommandes);
  } catch (error) {
      res.status(500).json({ message: "Erreur lors de la création du Commande", error: error.message });
  }
};






// export const createCommande = async (req, res) => {
//     try {
//         // Validation des données entrantes (req.body) peut être ajoutée ici
//         const newCommande = await Commande.create(req.body);
//         res.status(201).json(newCommande);
//     } catch (error) {
//         res.status(500).json({ message: "Erreur lors de la création du Commande", error: error.message });
//     }
// };

// Obtenir tous les Commandes
export const getAllCommande = async (req, res) => {
    try {
        const newCommande = await Commande.findAll();
        res.status(200).json(newCommande);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des Commandes", error: error.message });
    }
};


// Obtenir un Commande par ID
export const getCommandeById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const newCommande = await Commande.findByPk(idProduit);
        if (newCommande) {
            res.status(200).send(newCommande);
        } else {
            res.status(404).send({ message: 'Commande non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un Commande



export const deleteCommande = async (req, res, next) => {
    try {
      const newCommande = await Commande.findByPk(req.params.id);
      if (newCommande) {
        await newCommande.destroy();
        res.status(200).json({ message: 'Produit deleted' });
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };



// Mettre à jour un Commande


export const updateCommande = async (req, res, next) => {
    try {
      const newCommande = await Commande.findByPk(req.params.id);
      if (newCommande) {
        await newCommande.update(req.body);
        res.status(200).json(newCommande);
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };
