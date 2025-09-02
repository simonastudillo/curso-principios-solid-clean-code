(() => {

   // Ejemplo
   // Archivos a evaluar - files to evaluate
   const filesToEvaluate = [
      { idFile: 1, deleteFlag: false },
      { idFile: 2, deleteFlag: false },
      { idFile: 3, deleteFlag: true },
      { idFile: 4, deleteFlag: false },
      { idFile: 5, deleteFlag: false },
      { idFile: 7, deleteFlag: true },
   ]; 
    
   // Archivos marcados para borrar - files to delete
   const filesToDelete = filesToEvaluate.map( file => file.deleteFlag );

   // Malos
   class AbstractUser { };
   class UserMixin { };
   class UserImplementation { };
   interface IUser { };

   // Mejor
   class User { };
   interface User { };


   // Todo: Tarea
        
   // día de hoy - today
   const today = new Date();
    
   // días transcurridos - elapsed time in days
   const elapsedTimeInDays: number = 23;
    
   // número de archivos en un directorio - number of files in directory
   const numberOfFilesInDirectory = 33;

   // primer nombre - first name
   const firstName = 'Fernando';
    
   // primer apellido - last name
   const lastName = 'Herrera';

   // días desde la última modificación - days since modification
   const daysSinceLastModification = 12;
    
   // cantidad máxima de clases por estudiante - max classes per student
   const maxClassesPerStudent = 6;


})();