class CardsSet{
    private id: string;
    private name: string;
    private series: string;
    private printedTotal: number;
    private total: number;
    private releaseDate: string;
    private images: ImagesSet[];

    constructor(id: string, name: string, series: string, printedTotal: number, total: number, releaseDate: string, images: ImagesSet[]) {
        this.id = id;
        this.name = name;
        this.series = series;
        this.printedTotal = printedTotal;
        this.total = total;
        this.releaseDate = releaseDate;
        this.images = images;
    }
}