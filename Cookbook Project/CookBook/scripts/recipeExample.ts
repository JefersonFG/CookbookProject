class Example implements IExample  {
    //Fields

    name: string;
    ingredients: Ingredient[] = [];
    prepTime: string; 

    //Constructor

    constructor(example: IExample) {
        this.name = example.name;
        this.ingredients = example.ingredients;
        this.prepTime = example.prepTime;
    }             
}


