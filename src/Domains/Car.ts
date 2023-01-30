import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

// "Cada programa de software está relacionado a alguma atividade ou interesse do seu usuário. Essa área de assunto em que o usuário utiliza o programa é vista como o domínio do software."

class Car extends Vehicle {
  /* 
    "O 'protected' age de forma semelhante ao 'private', com a exceção de que os membros declarados 'protected' também podem ser acessados dentro das classes derivadas."
    https://www.typescriptlang.org/docs/handbook/classes.html
  */

  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}

export default Car;