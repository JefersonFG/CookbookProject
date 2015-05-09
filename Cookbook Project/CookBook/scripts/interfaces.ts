import FGroup = require('foodGroup');
import Ingredient = require('ingredient');

//RecipeCategory module

export module RecipeCategory {

    //IBaseRecipeCategory

    export interface IBaseRecipeCategory {
        //Properties

        name: string;
        foodGroups: FGroup.FoodGroup[];
    }

    //IRecipeCategory

    export interface IRecipeCategory extends IBaseRecipeCategory {
        //Properties

        description: string;
        examples: IExample[];
    }

    //IRecipeCategorySymmary

    export interface IRecipeCategorySummary {
        //Properties

        text: string;
        title: string;
    }

}

//IFoodGroup

export interface IFoodGroup {
    //Properties

    name: string;
}

//IExample

export interface IExample {
    //Properties

    name: string;
    prepTime: string;
    ingredients: Ingredient.Ingredient[];
}