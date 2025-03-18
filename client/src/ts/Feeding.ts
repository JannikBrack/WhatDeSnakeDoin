class Feeding {
    id: number;
    date: string;
    foodType: string;
    amount: number;
    constructor(id: number, date: string, foodType: string, amount: number) {
        this.id = id;
        this.date = date;
        this.foodType = foodType;
        this.amount = amount;
    }
}