(() => {

   // No aplicando el principio de responsabilidad única

   type Gender = 'M' | 'F';

   interface PersonProps {
      birthdate: Date;
      gender: Gender;
      name: string;
   }

   class Person {
      public birthdate: Date;
      public gender: Gender;
      public name: string;

      constructor(
         {name, gender, birthdate}: PersonProps
      ) {
         this.birthdate = birthdate;
         this.gender = gender;
         this.name = name;
      }
   }

   interface UserProps {
      email: string;
      role: string;
      birthdate: Date;
      gender: Gender;
      name: string;
   }

   class User extends Person {
      private lastAccess: Date;
      public birthdate: Date;
      public email: string;      
      public gender: Gender;
      public name: string;
      public role: string;

      constructor(
         {email, role, birthdate, gender, name}: UserProps
      ) {
         super({birthdate, gender, name});
         this.birthdate = birthdate;
         this.email = email;
         this.gender = gender;
         this.lastAccess = new Date();
         this.name = name;
         this.role = role;
      }

      checkCredentials() {
         // Logic to check user credentials
         return true;
      }
   }

   interface UserSettingsProps {
      workingDirectory: string;
      lastOpenFolder: string;
      birthdate: Date;
      email: string;
      gender: Gender;
      name: string;
      role: string;
   }

   class UserSettings extends User {
      public workingDirectory: string;
      public lastOpenFolder: string;
      public birthdate: Date;
      public email: string;
      public gender: Gender;
      public name: string;
      public role: string;

      constructor(
         {workingDirectory, lastOpenFolder, email, role, name, gender, birthdate}: UserSettingsProps
      ) {
         super({email, role, name, gender, birthdate});
         this.workingDirectory = workingDirectory;
         this.lastOpenFolder = lastOpenFolder;
         this.birthdate = birthdate;
         this.email = email;
         this.gender = gender;
         this.name = name;
         this.role = role;

      }
   }

   const userSettings = new UserSettings({
      workingDirectory: 'C:/projects/clean-code',
      lastOpenFolder: 'C:/projects/clean-code/src',
      email: 'fernando@google.com',
      role: 'admin',
      name: 'Fernando',
      gender: 'M',
      birthdate: new Date('1985-10-21')
   });
   console.log({userSettings});

})();