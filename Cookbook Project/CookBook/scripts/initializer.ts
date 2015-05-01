var recipeCategories: RecipeCategories;
var renderer = null;

window.onload = () => { 
    var categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));

    //Invoke loadRecipes when categoriesSelect.onchange is called

    categoriesSelect.onchange = () => loadRecipes();

    //Create the loader object passing the json file as a parameter

    var loader: RecipeLoader = new RecipeLoader("/JSON/recipeTypes.json");

    //Calling the load function of the RecipeLoader

    loader.load();

    renderer = new Renderer();
};

function loadRecipes() {
    var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
    try {
        var category = recipeCategories.items
            //Find selected item by name
            .filter(item => item.name === el.value)
            //return the item
            .reduce(item => new RecipeCategory({
                name: el.value,
                foodGroups: item.foodGroups,
                description: item.description,
                examples: item.examples
            }));
        renderer.renderCategory(category);
    }
    catch (ex) { alert(ex.message) }
}
  




