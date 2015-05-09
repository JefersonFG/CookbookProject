import BaseRCategory = require('baseRecipeCategory');
import Interfaces = require('interfaces');

export class RecipeCategory extends BaseRCategory.BaseRecipeCategory implements Interfaces.RecipeCategory.IRecipeCategory {
    //Fields

    description: string;
    examples: Interfaces.IExample[];

    //Constructor

    constructor(recipeCategory: Interfaces.RecipeCategory.IRecipeCategory) {
        super(recipeCategory.name, recipeCategory.foodGroups);
        this.description = recipeCategory.description;
        this.examples = recipeCategory.examples;
    }
} 