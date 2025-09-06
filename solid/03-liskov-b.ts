export abstract class Car {

   abstract getNumberOfSeats(): number;
}

export class Tesla extends Car {

   constructor(private numberOfSeats: number) {
      super();
   }

   getNumberOfSeats() {
      return this.numberOfSeats;
   }
}

export class Audi extends Car {

   constructor(private numberOfSeats: number) {
      super();
   }

   getNumberOfSeats() {
      return this.numberOfSeats;
   }
}

export class Toyota extends Car {

   constructor(private numberOfSeats: number) {
      super();
   }

   getNumberOfSeats() {
      return this.numberOfSeats;
   }
}

export class Honda extends Car {

   constructor(private numberOfSeats: number) {
      super();
   }

   getNumberOfSeats() {
      return this.numberOfSeats;
   }
}


export class Volvo extends Car {

   constructor(private numberOfSeats: number) {
      super();
   }

   getNumberOfSeats() {
      return this.numberOfSeats;
   }
}


export class Ford extends Car {

   constructor(private numberOfSeats: number) {
      super();
   }

   getNumberOfSeats() {
      return this.numberOfSeats;
   }
}
