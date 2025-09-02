type Size = '' | 'S' | 'M' | 'L' | 'XL';
class Product {
   constructor (
      public name: string = '',
      public price: number = 0,
      public size: Size = ''
   ){}

   isProductReady(): boolean {
      for (const property in this) {
         switch ( typeof this[property] ) {
            case 'string':
               if ( this[property].length === 0 ) throw Error(`${property} is empty`);
               break;
            case 'number':
               if ( this[property] <= 0 ) throw Error(`${property} is invalid`);
               break;
            default:
               throw Error(`${typeof this[property]} is not supported`);
         }
      }
      return true;
   }

   toString() {
      if ( !this.isProductReady() ) return;

      return `${this.name} (${this.price}), ${this.size }`;
   }
}

(() => {
   
   const bluePants = new Product('Blue large pants', 10, 'L');
   console.log(bluePants.toString());
})();