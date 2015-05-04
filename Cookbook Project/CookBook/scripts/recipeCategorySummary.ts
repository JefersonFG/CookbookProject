class RecipeCategorySummary implements IRecipeCategorySummary {
    //Fields

    text: string;
    title: string;

    //Constructor

    constructor(recipeCategorySummary: IRecipeCategorySummary) {
        this.text = recipeCategorySummary.text;
        this.title = recipeCategorySummary.title;
    }
}