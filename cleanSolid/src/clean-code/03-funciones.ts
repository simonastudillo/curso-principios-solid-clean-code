(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ): void {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ): void {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBiographyById( id: string ): void {
        console.log({ id });
    }
    
    // Crear una película
    interface Movie {
      cast:          string[];
      description:   string;
      rating:        number;
      title:         string;
    }
    function createMovie( { title, description, rating, cast }: Movie ): void {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function checkFullName( fullName: string): boolean {
         // tarea asincrona para verificar nombre
        // ..
        // ..
        // Simulando una verificación de nombre
        return fullName !== 'fernando';
    }
    function createActor( fullName: string, birthDate: Date ): boolean {


        if ( !checkFullName(fullName) ) return false;

        console.log('Crear actor', birthDate);
        return true;        

    }

    
   // Continuar
   // Función original
   const getPayAmount_original = ({ isDead = false, isSeparated = true, isRetired = false }) => {
      let result;
      if ( isDead ) {
         result = 1500;
      } else {
         if ( isSeparated ) {
            result = 2500;
         } else {
            if ( isRetired ) {
               result = 3000;
            } else {
               result = 4000; 
            }
         }
      }
      return result;
   }

   // Función corregida
   const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

      if ( isDead ) return 1500;
      
      if ( isSeparated ) return 2500;
      
      return ( isRetired ) ? 3000 : 4000;
   }


})();
