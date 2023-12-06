export class Ability implements IAbility {
    name: string;
    text: string;
  
    constructor(request: IAbility) {
      this.name = request.name;
      this.text = request.text;
    }

    public static createAbility(request: IAbility): Ability {
      return new Ability(request);
    }
  }  
  
  
  