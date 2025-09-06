(() => {

   interface Bird {
      eat(): void;
   }

   interface Flyer {
      fly(): void;
   }

   interface Swimmer {
      swim(): void;
   }

   interface Runner {
      run(): void;
   }

   class Tucan implements Bird, Flyer {
      public fly(): void {
         console.log('El tucán vuela');
      }
      public eat(): void {
         console.log('El tucán come frutas');
      }
   }

   class Humminbird implements Bird, Flyer {
      public fly(): void {
         console.log('El colibrí vuela');
      }
      public eat(): void {
         console.log('El colibrí come néctar');
      }
   }

   class Ostrich implements Bird, Swimmer, Runner {
      public eat(): void {
         console.log('El avestruz come semillas');
      }
      public run(): void {
         console.log('El avestruz corre');
      }
      public swim(): void { }
   }

   class Penguin implements Bird, Swimmer {
      public eat(): void {
         console.log('El pingüino come peces');
      }

      public swim(): void {
         console.log('El pingüino nada en el agua');
      }
   }


})();