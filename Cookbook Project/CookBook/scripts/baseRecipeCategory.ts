class BaseRecipeCategory {
    //Fields

    private _name: string;
    private _foodGroups: FoodGroup[] = [];

    //Properties

    get name() {
        return this._name;
    }
    
    set name(value: string) {
        this._name = value;
    }

    get foodGroups() {
        return this._foodGroups;
    }

    set foodGroups(value: FoodGroup[]) {
        this._foodGroups = value;
    }

} 