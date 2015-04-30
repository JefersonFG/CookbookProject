class BaseRecipeCategory {
    //Fields

    name: string;
    foodGroups: FoodGroup[] = [];

    //Constructor

    constructor(name: string, foodGroups: FoodGroup[]) {
        this.name = name;
        this.foodGroups = foodGroups;
    }
} 