(() => {

   //* Aplicar el principio de responsabilidad única
   //* Priorizar la composición frente a la herencia

   type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

   interface IHtmlElementProps {
      id: string;
      type: HtmlType;
   }

   class HtmlElement {
      public id: string;
      public type: HtmlType;

      constructor(
      { id, type }: IHtmlElementProps
      ) {
         this.id = id;
         this.type = type;
      }
   }

   interface IInputAttributesProps {
      value: string;
      placeholder: string;
   }

   class InputAttributes {
      public value: string;
      public placeholder: string;

      constructor(
         { value, placeholder }: IInputAttributesProps
      ) {
         this.value = value;
         this.placeholder = placeholder;
      }
   }

   class InputEvents {

      setFocus() { };
      getValue() { };
      isActive() { };
      removeValue() { };
   }

   interface IInputElementProps {
      value: string;
      placeholder: string;
      id: string;
      type: HtmlType;
   }

   class InputElement {
      public htmlElement: HtmlElement;
      public inputAttributes: InputAttributes;
      public inputEvents: InputEvents;

      constructor({
         id,
         type,
         value,
         placeholder
      }: IInputElementProps){
         this.htmlElement = new HtmlElement({
            id,
            type
         });
         this.inputAttributes = new InputAttributes({
            value,
            placeholder
         });
         this.inputEvents = new InputEvents();
      }
   }


   //? Idea para la nueva clase InputElement

   const nameField = new InputElement({
      id: 'txtName',
      type: 'input',
      value: 'Fernando',
      placeholder: 'Enter first name'
   });

   console.log({ nameField });

})()