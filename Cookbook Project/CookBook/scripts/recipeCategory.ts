class RecipeCategory extends BaseRecipeCategory {
    //Constructor

    constructor(name: string, foodGroups: FoodGroup[], public description: string) {
        super(name, foodGroups);
    }
} 