export class Attack{
    cost: string[];
    name: string;
    text: string;
    damage: string; 

    constructor(request: IAttack) {
      this.cost = request.cost;
      this.name = request.name;
      this.text = request.text;
      this.damage = request.damage;
    }

    public static createAttack(request: IAttack): Attack {
      return new Attack(request);
    }
}
 
