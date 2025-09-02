type Size = '' | 'S' | 'M' | 'L' | 'XL';
class Product {
   constructor (
      public name: string = '',
      public price: number = 0,
      public size: Size = ''
   ){}

   toString() {
      // NO DRY
      if (this.name.length <= 0) throw Error('Name is empty');
      if (this.price <= 0) throw Error('Price is invalid');
      if (this.size.length <= 0) throw Error('Size is empty');
      return `${this.name} (${this.price}), ${this.size }`;
   }
}

(() => {
   
   const bluePants = new Product('Blue large pants', 10, 'L');
   console.log(bluePants.toString());
})();