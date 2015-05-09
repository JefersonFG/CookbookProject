import FGroup = require('foodGroup');
import Interfaces = require('interfaces');

export class BaseRecipeCategory implements Interfaces.RecipeCategory.IBaseRecipeCategory {
    //Fields

    name: string;
    foodGroups: FGroup.FoodGroup[] = [];

    //Constructor

    constructor(name: string, foodGroups: FGroup.FoodGroup[]) {
        this.name = name;
        this.foodGroups = foodGroups;
    }
} 