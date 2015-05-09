import Ingredient = require('ingredient');
import Interfaces = require('interfaces');

export class Example implements Interfaces.IExample {
    //Fields

    name: string;
    ingredients: Ingredient.Ingredient[] = [];
    prepTime: string; 

    //Constructor

    constructor(example: Interfaces.IExample) {
        this.name = example.name;
        this.ingredients = example.ingredients;
        this.prepTime = example.prepTime;
    }
}