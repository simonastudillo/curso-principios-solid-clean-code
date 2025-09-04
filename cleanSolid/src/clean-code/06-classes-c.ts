(() => {

   // Aplicando el principio de responsabilidad única
   // Priorizar la composición frente a la Herencia.

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
   }

   class User {
      private lastAccess: Date;
      public email: string;
      public role: string;

      constructor(
         {email, role}: UserProps
      ) {
         this.email = email;
         this.lastAccess = new Date();
         this.role = role;
      }

      checkCredentials() {
         // Logic to check user credentials
         return true;
      }
   }

   interface SettingsProps {
      workingDirectory: string;
      lastOpenFolder: string;
   }

   class Settings {
      public workingDirectory: string;
      public lastOpenFolder: string;

      constructor(
         { workingDirectory, lastOpenFolder }: SettingsProps
      ) {
         this.workingDirectory = workingDirectory;
         this.lastOpenFolder = lastOpenFolder;
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

   class UserSettings {
      public person: Person;
      public user: User;
      public settings: Settings;

      constructor(
         { workingDirectory, lastOpenFolder, email, role, name, gender, birthdate }: UserSettingsProps
      ) {
         this.person = new Person({
            birthdate,
            gender,
            name
         });
         this.user = new User({
            email,
            role
         });
         this.settings = new Settings({
            workingDirectory,
            lastOpenFolder
         });
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