export class Weakness{
    type: string;
    value: string;

    constructor(request: IWeaknessResistance) {
      this.type = request.type;
      this.value = request.value;
    }

    public static createWeakness(request: IWeaknessResistance): Weakness {
      return new Weakness(request);
    }
}