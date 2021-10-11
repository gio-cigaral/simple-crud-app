import express from 'express';

// import ClientController from './client.controller.js';
import RecipesDAO from '../data_access_model/RecipesDAO.js';


const router = express.Router();


router
    .route("/")
    .get(async (req, res) => {
    const { recipesList, totalNumRecipes } = await RecipesDAO.getRecipes({
    });
      res.render("dashboard", {
        recipes: recipesList
      })
    });

router
    .route("/add_recipe")
    .get((req, res) => 
        res.render("addRecipe", {}));

router
    .route("/login_page")
    .get((req, res) => 
        res.render("addRecipe", {}));

router
    .route("/registration_page")
    .get((req, res) => 
        res.render("addRecipe", {}));

export default router;