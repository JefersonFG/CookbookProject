//IBaseRecipeCategory

interface IBaseRecipeCategory {
    //Properties

    name: string;
    foodGroups: FoodGroup[];
}

//IRecipeCategory

interface IRecipeCategory extends IBaseRecipeCategory {
    //Properties

    description: string;
    examples: IExample[];
}

//IFoodGroup

interface IFoodGroup {
    //Properties

    name: string;
}

//IExample

interface IExample {
    //Properties

    name: string;
    prepTime: string;
    ingredients: Ingredient[];
}

