(() => {

   interface Product {
      id: number;
      name: string;
   }

   class ProductService {

      private httpAdapter: Object;

      getProduct(id: number): void {
         // Realiza un proceso para obtener el producto y retornarlo
         console.log('Producto: ', { id, name: 'OLED Tv' });
      }

      saveProduct(product: Product) {
         // Realiza una petición para salvar en base de datos 
         console.log('Guardando en base de datos', product);
      }
   }

   // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
   // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
   class ProductBloc {

      loadProduct(id: number) {
         // Realiza un proceso para obtener el producto y retornarlo
         console.log('Producto: ', { id, name: 'OLED Tv' });
      }

      saveProduct(product: Product) {
         // Realiza una petición para salvar en base de datos 
         console.log('Guardando en base de datos', product);
      }

      notifyClients() {
         console.log('Enviando correo a los clientes');
      }

   }

   class CartBloc {

      private $itemsInCart: Object[] = [];

      onAddToCart(productId: number) {
         // Agregar al carrito de compras
         this.$itemsInCart.push({ id: productId });
         console.log('Agregando al carrito ', productId);
      }
   }



   const productBloc = new ProductBloc();
   const cartBloc = new CartBloc();

   productBloc.loadProduct(10);
   productBloc.saveProduct({ id: 10, name: 'OLED TV' });
   productBloc.notifyClients();
   cartBloc.onAddToCart(10);








})();