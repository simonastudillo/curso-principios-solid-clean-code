(() => {

interface Bird {
   fly(): number;
   eat(): void;
   run(): void;
   swim(): void;
}

class Tucan implements Bird {
   public fly(): void {
      console.log('El tucán vuela');
   }
   public eat(): void {
      console.log('El tucán come frutas');
   }
   public run(): void {
      console.log('El tucán corre');
   }
   public swim(): void {}
}

class Humminbird implements Bird {
   public fly(): void {
      console.log('El colibrí vuela');
   }
   public eat(): void {
      console.log('El colibrí come néctar');
   }
   public run(): void {
      console.log('El colibrí corre');
   }
   public swim(): void { }
}

class Ostrich implements Bird {
   public fly(): void {
      throw new Error('El avestruz no vuela');
   }
   public eat(): void {
      console.log('El avestruz come semillas');
   }
   public run(): void {
      console.log('El avestruz corre');
   }
   public swim(): void { }
}

class Penguin implements Bird {
   public fly(): void {
      throw new Error('El pingüino no vuela');
   }
   public eat(): void {
      console.log('El pingüino come peces');
   }
   public run(): void {
      console.log('El avestruz corre');
   }

   public swim(): void {
      console.log('El pingüino nada en el agua');
   }
}


})();