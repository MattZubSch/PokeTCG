export class CardMarket implements ICardMarket {
    url: string;
    updatedAt: string;
    prices: {
        averageSellPrice: number;
    };

    constructor(url: string, updatedAt: string, prices: { averageSellPrice: number }) {
        this.url = url;
        this.updatedAt = updatedAt;
        this.prices = prices;
    }

    static createCardMarket(data: ICardMarket): CardMarket {
        return new CardMarket(data.url, data.updatedAt, { averageSellPrice: data.prices.averageSellPrice });
    }
}