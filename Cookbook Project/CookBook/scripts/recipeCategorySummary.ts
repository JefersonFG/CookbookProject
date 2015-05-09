import Interfaces = require('interfaces');

export class RecipeCategorySummary implements Interfaces.RecipeCategory.IRecipeCategorySummary {
    //Fields

    text: string;
    title: string;

    //Constructor

    constructor(recipeCategorySummary: Interfaces.RecipeCategory.IRecipeCategorySummary) {
        this.text = recipeCategorySummary.text;
        this.title = recipeCategorySummary.title;
    }
}