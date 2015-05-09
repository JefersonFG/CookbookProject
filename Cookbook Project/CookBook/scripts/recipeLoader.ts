/// <reference path="typings/jquery.d.ts" />

import RExample = require('recipeExample');
import FGroup = require('foodGroup');
import Ingredient = require('ingredient');
import Initializer = require('initializer');
import Interfaces = require('interfaces');
import RCategory = require('recipeCategory');
import RCategories = require('recipeCategories');
import RCategorySummary = require('recipeCategorySummary');

export class RecipeLoader {
    constructor(public url: string) { }

    load() {
        $.getJSON(this.url,(data) => {
            this.mapData(data);
        });
    }

    mapData(data) {
        if (data) {
            var categories: any[] = data.recipeCategories;

            //Changed RecipeCategories to use the new generic type

            Initializer.recipeCategories = new RCategories.RecipeCategories<Interfaces.RecipeCategory.IRecipeCategory>();

            //Created a new RecipeCategories object named recipeCategoriesSummary
            //and passed an IRecipeCategorySummary as the generic value

            var recipeCategoriesSummary: RCategories.RecipeCategories<Interfaces.RecipeCategory.IRecipeCategorySummary> =
                new RCategories.RecipeCategories<Interfaces.RecipeCategory.IRecipeCategorySummary>();

            categories.forEach((category) => {
                var recipeCategory = new RCategory.RecipeCategory({
                    name: category.title,
                    foodGroups: this.getFoodGroups(category),
                    description: category.details,
                    examples: this.getExamples(category)
                });
                Initializer.recipeCategories.items.push(recipeCategory);

                //Created a new RecipeCategorySummary instance
                //and added it into the recipeCategoriesSummary items collection

                var recipeCategorySummary = new RCategorySummary.RecipeCategorySummary({
                    text: category.title,
                    title: category.details
                });
                recipeCategoriesSummary.items.push(recipeCategorySummary);

            });
            
            //Render the categories into the select
            Initializer.renderer.renderCategories(recipeCategoriesSummary);
        }
        else {
            Initializer.renderer.renderError();
        }
    }

    getFoodGroups(category): FGroup.FoodGroup[] {
        //Map foodgroups data to TS object
        return category.foodGroups.map((foodGroup) => {
            var group = new FGroup.FoodGroup(foodGroup.title);
            return group;
        });
    }

    getExamples(category): Interfaces.IExample[] {
        return category.examples.map((example) => {
            return new RExample.Example({
                name: example.name,
                ingredients: this.getIngredients(example),
                prepTime: example.prepTime
            });
        });
    }

    getIngredients(example): Ingredient.Ingredient[] {
        return example.ingredients.map((value) => {
            return new Ingredient.Ingredient(value);
        });
    }
} 