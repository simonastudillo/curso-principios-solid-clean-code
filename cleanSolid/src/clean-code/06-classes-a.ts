(() => {

   // No aplicando el principio de responsabilidad única

   type Gender = 'M' | 'F';

   class Person {

      constructor(
         public name: string,
         public gender: Gender,
         public birthdate: Date,
      ) {}
   }

   class User extends Person {
      private lastAccess: Date;

      constructor(
         public email: string,
         public role: string,
         name: string,
         gender: Gender,
         birthdate: Date
      ) {
         super(name, gender, birthdate);
         this.lastAccess = new Date();
      }

      checkCredentials() {
         // Logic to check user credentials
         return true;
      }
   }

   class UserSettings extends User {
      constructor(
         public workingDirectory: string,
         public lastOpenFolder: string,
         email: string,
         role: string,
         name: string,
         gender: Gender,
         birthdate: Date
      ) {
         super(email, role, name, gender, birthdate);
      }
   }

   const userSettings = new UserSettings(
      'C:/projects/clean-code',
      'C:/projects/clean-code/src',
      'fernando@google.com',
      'admin',
      'Fernando',
      'M',
      new Date('1985-10-21')
   );
   console.log({userSettings});

})();