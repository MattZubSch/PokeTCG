export class ImagesCard implements IImagesCard{
    small: string;
    large: string;

    constructor(request: IImagesCard) {
      this.small = request.small;
      this.large = request.large;
    }

    public static createImagesCard(request: IImagesCard): ImagesCard {
      return new ImagesCard(request);
    }
}