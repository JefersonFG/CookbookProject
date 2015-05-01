class RecipeCategory extends BaseRecipeCategory implements IRecipeCategory {
    //Fields

    description: string;
    examples: IExample[];

    //Constructor

    constructor(recipeCategory: IRecipeCategory) {
        super(recipeCategory.name, recipeCategory.foodGroups);
        this.description = recipeCategory.description;
        this.examples = recipeCategory.examples;
    }
} 