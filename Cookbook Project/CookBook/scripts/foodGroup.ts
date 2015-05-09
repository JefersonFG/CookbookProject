import Interfaces = require('interfaces');

export class FoodGroup implements Interfaces.IFoodGroup {
    //Fields

    name: string;

    //Constructor

    constructor(name: string) {
        this.name = name;
    } 
} 