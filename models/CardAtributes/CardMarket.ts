export class CardMarket {
    url: string;
    updatedAt: string;
    prices: number;

    constructor(request: ICardMarket) {
        this.url = request.url;
        this.updatedAt = request.updatedAt;
        this.prices = request.prices.averageSellPrice;
    }

    public static createCardMarket(request: ICardMarket): CardMarket {
        return new CardMarket(request);
    }
}