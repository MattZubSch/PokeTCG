export class Resistances{
    type: string;
    value: string;

    constructor(request: IWeaknessResistance) {
      this.type = request.type;
      this.value = request.value;
    }

    public static createResistances(request: IWeaknessResistance): Resistances {
      return new Resistances(request);
    }
}