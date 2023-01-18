import ICar from '../Interfaces/ICar';

// "Cada programa de software está relacionado a alguma atividade ou interesse do seu usuário. Essa área de assunto em que o usuário utiliza o programa é vista como o domínio do software."

class Car {
  /* 
    "O 'protected' age de forma semelhante ao 'private', com a exceção de que os membros declarados 'protected' também podem ser acessados dentro das classes derivadas."
    https://www.typescriptlang.org/docs/handbook/classes.html
  */

  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public getId() {
    return this.id;
  }

  public getModel() {
    return this.model;
  }

  public getyear() {
    return this.year;
  }

  public getColor() {
    return this.color;
  }

  public getStatus() {
    return this.status;
  }

  public getBuyValue() {
    return this.buyValue;
  }
}

export default Car;