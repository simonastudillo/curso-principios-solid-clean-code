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

   class Mailer {
      private emailService: Object;

      sendEmail(email: string, subject: string, body: string) {
         // Lógica para enviar un correo electrónico
         console.log('Enviando correo a:', email);
      }
   }

   // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
   // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
   class ProductBloc {

      private productService: ProductService;
      private mailer: Mailer;

      constructor(productService: ProductService, mailer: Mailer) {
         this.productService = productService;
         this.mailer = mailer;
      }

      loadProduct(id: number) {
         this.productService.getProduct(id);
      }

      saveProduct(product: Product) {
         this.productService.saveProduct(product);
      }

      notifyClients() {
         this.mailer.sendEmail('cliente@example.com', 'Nuevo producto', 'Se ha agregado un nuevo producto');
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



   const productBloc = new ProductBloc(new ProductService(), new Mailer());
   const cartBloc = new CartBloc();

   productBloc.loadProduct(10);
   productBloc.saveProduct({ id: 10, name: 'OLED TV' });
   productBloc.notifyClients();
   cartBloc.onAddToCart(10);








})();