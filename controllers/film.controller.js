import Film from '../models/film.model.js';



export const createFilm = async (req, res) => {
    try {
        // Validation des données entrantes (req.body) peut être ajoutée ici
        const newFilm = await Film.create(req.body);
        res.status(201).json(newFilm);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du Film", error: error.message });
    }
};

// Obtenir tous les Films
export const getAllFilms = async (req, res) => {
    try {
        const newFilm = await Film.findAll();
        res.status(200).json(newFilm);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des Films", error: error.message });
    }
};


// Obtenir un Film par ID
export const getFilmById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const newFilm = await Film.findByPk(idProduit);
        if (newFilm) {
            res.status(200).send(newFilm);
        } else {
            res.status(404).send({ message: 'Film non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un Film



export const deleteFilm = async (req, res, next) => {
    try {
      const newFilm = await Film.findByPk(req.params.id);
      if (newFilm) {
        await newFilm.destroy();
        res.status(200).json({ message: 'Produit deleted' });
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };



// Mettre à jour un Film


export const updateFilm = async (req, res, next) => {
    try {
      const newFilm = await Film.findByPk(req.params.id);
      if (newFilm) {
        await newFilm.update(req.body);
        res.status(200).json(newFilm);
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };




























// // Fonction pour obtenir tous les films avec les détails du produit
// export const getAllFilms = async (req, res) => {
//     try {
//       // Utilisez la méthode findAll avec l'option include pour spécifier la jointure
//       const films = await Film.findAll({
//         include: [{
//           model: Produit,
//           attributes: ['idProduit', 'titre', 'prix', 'description', 'image', 'quantiteEnStock', 'quantiteMinStock', 'etat'],
//         }],
//       });
  
//       // Remappez la structure JSON pour obtenir un seul objet sans le niveau "Produit"
//       const flattenedFilms = films.map(film => {
//         return {
//           idProduit: film.idProduit,
//           acteur: film.acteur,
//           realisateur: film.realisateur,
//           videoExtrait: film.videoExtrait,
//           details: film.details,
//           titre: film.Produit.titre,
//           prix: film.Produit.prix,
//           description: film.Produit.description,
//           image: film.Produit.image,
//           quantiteEnStock: film.Produit.quantiteEnStock,
//           quantiteMinStock: film.Produit.quantiteMinStock,
//           etat: film.Produit.etat,
//         };
//       });
  
//       // Retournez les films avec les détails du produit aplatis
//       res.status(200).json(flattenedFilms);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Une erreur s\'est produite lors de la récupération des films.' });
//     }
//   };
  



// // Obtenez un film par ID
// export const getFilmById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const film = await Film.findByPk(id, {
//       include: [{
//         model: Produit,
//         attributes: ['idProduit', 'titre', 'prix', 'description', 'image', 'quantiteEnStock', 'quantiteMinStock', 'etat'],
//       }],
//     });

//     if (!film) {
//       return res.status(404).json({ message: 'Film non trouvé' });
//     }

//     const flattenedFilm = {
//       idProduit: film.idProduit,
//       acteur: film.acteur,
//       realisateur: film.realisateur,
//       videoExtrait: film.videoExtrait,
//       details: film.details,
//       titre: film.Produit.titre,
//       prix: film.Produit.prix,
//       description: film.Produit.description,
//       image: film.Produit.image,
//       quantiteEnStock: film.Produit.quantiteEnStock,
//       quantiteMinStock: film.Produit.quantiteMinStock,
//       etat: film.Produit.etat,
//     };

//     res.status(200).json(flattenedFilm);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Une erreur s\'est produite lors de la récupération du film.' });
//   }
// };




// // Crer àle  film 
// export const createFilm = async (req, res) => {
//     try {
//         const newFilm = await Film.create(req.body);
//         res.status(201).json(newFilm);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };



// // Mettre à jour un film par ID


// // Mettez à jour un film par ID
// export const updateFilm = async (req, res) => {
//     const { id } = req.params;
//     const { acteur, realisateur, videoExtrait, details, titre, prix, description, image, quantiteEnStock, quantiteMinStock, etat } = req.body;
  
//     try {
//       const film = await Film.findByPk(id, {
//         include: [{
//           model: Produit,
//           attributes: ['idProduit', 'titre', 'prix', 'description', 'image', 'quantiteEnStock', 'quantiteMinStock', 'etat'],
//         }],
//       });
  
//       if (!film) {
//         return res.status(404).json({ message: 'Film non trouvé' });
//       }
  
//       // Mettez à jour le film
//       await film.update({
//         acteur,
//         realisateur,
//         videoExtrait,
//         details,
//         titre, 
//         prix, 
//         description, 
//         image, 
//         quantiteEnStock, 
//         quantiteMinStock, 
//         etat
        
//       });
  
//       // Mise à jour du modèle Produit associé (si nécessaire)
//       if (film.Produit) {
//         await film.Produit.update({
//           // Attributs du modèle Produit à mettre à jour
//         });
//       }
  
//       // Retournez le film mis à jour avec les détails du produit
//       const flattenedFilm = {
//         idProduit: film.idProduit,
//         acteur: film.acteur,
//         realisateur: film.realisateur,
//         videoExtrait: film.videoExtrait,
//         details: film.details,
//         titre: film.Produit.titre,
//         prix: film.Produit.prix,
//         description: film.Produit.description,
//         image: film.Produit.image,
//         quantiteEnStock: film.Produit.quantiteEnStock,
//         quantiteMinStock: film.Produit.quantiteMinStock,
//         etat: film.Produit.etat,
//       };
  
//       res.status(200).json(flattenedFilm);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour du film.' });
//     }
//   };
  


//   export const deleteFilm = async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       const film = await Film.findByPk(id);
  
//       if (!film) {
//         return res.status(404).json({ message: 'Film non trouvé' });
//       }
  
//       // Supprimez le film
//       await film.destroy();
  
//       res.status(204).end();
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Une erreur s\'est produite lors de la suppression du film.' });
//     }
//   };