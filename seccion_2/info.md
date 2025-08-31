# Introducción a Clean Code y Deuda Técnica

> La falta de calidad en el código, que genera una deuda que repercutirá en
> costos futuros.

La deuda técnica es falta de calidad del producto, puede ser intencional o no.
Se refiere a las decisiones de diseño que priorizan la entrega rápida sobre la
calidad del producto, lo que puede llevar a problemas a largo plazo.

Todos eventualmente generarán deuda técnica en algún momento.

Lo peligroso de la deuda técnica es que puede acumularse con el tiempo,
volviéndose más difícil y costosa de abordar a medida que avanza el desarrollo
del producto. Además, puede afectar la moral del equipo y la satisfacción del
cliente si no se gestiona adecuadamente.

La mala calidad en el software siempre la acaba pagando o asumiendo alguien. Ya
sea el cliente, el proveedor con recursos o el propio equipo de desarrollo
dedicando tiempo a refactorizar o malgastando tiempo programando sobre un
sistema frágil.

La deuda se paga en costos económicos:

1. Tiempo en realizar mantenimientos.
2. Tiempo en refactorizar código.
3. Tiempo en comprender el código existente.
4. Tiempo adicional en la transferencia del código a otras personas.

Hay 4 tipos de deudas:

1. Imprudente

> No hay tiempo, sólo copia y pega eso de nuevo

2. Inadvertido

> "¿Qué son patrones de diseño?"

3. Prudente

> Tenemos que entregar rápido, ya refactorizaremos después.

4. Prudente e inadvertida

> "Ahora sabemos cómo lo deberíamos haber hecho"

## Refactorización

Es la forma de pagar la deuda técnica. Es un proceso que tiene como objetivo
mejorar el código sin alterar su comportamiento para que sea entendible y
tolerante a cambios.

Usualmente para que una refactorización fuerte tenga el objetivo esperado, es
imprescindible contar con pruebas automáticas.

## ¿Qué es Clean Code?

> "Código limpio es aquel que se ha escrito con la intención de que otra persona
> (o tú mismo en el futuro) lo entienda." - Carlo Blé

> "Nuestro código tiene que ser simple y directo, debería leerse con la misma
> facilidad que un texto bien escrito." - Grady Booch

> "Programar es el arte de decirle a otro humano lo que quieres que la
> computadora haga." - Donald Knuth

Clean code se refiere a un conjunto de principios y prácticas para escribir
código que sea legible, mantenible y fácil de entender. El objetivo es facilitar
la colaboración entre desarrolladores y mejorar la calidad del software a lo
largo del tiempo.

Parte importante es el uso de nombres significativos y descriptivos para
variables, funciones y clases. Esto ayuda a que el código sea más fácil de leer
y entender, lo que a su vez facilita su mantenimiento y evolución.

## Nombre de variables y clases y funciones

Evitar el uso de guiones bajos en el nombre de las variables. En su lugar, se
prefiere el uso de camelCase (salvo excepciones como Python donde se recomienda
snake_case).

Evitar ahorrarse caracteres al nombrar variables, clases e interfaces.

**Recomendaciones:**

- Nombres de variables: `camelCase`
- Nombres de clases e interfaces: `UpperCamelCase`
- Se recomienda el uso de nombres en `ingles`.
- Se deben de evitar la información técnica en los nombres.

Ejemplos de malos nombres de variables

```javascript
const n = 53;
const tx = 0.15;
const cat = "T-shirts";
const ddmmyyyy = new Date(2023, 2, 15);
```

Ejemplos de buenos nombres de variables

```javascript
const numberOfUnits = 53;
const taxRate = 0.15;
const category = "T-shirts";
const birthDate = new Date(2023, 2, 15);
```

Ejemplos de malos nombres de clases, funciones e interfaces

```javascript
class AbstractUser {}
class UserMixin {}
class UserImplementation {}
interface UserInterface {}
```

Ejemplos de buenos nombres de clases, funciones e interfaces

```javascript
class User {}
class UserProfile {}
class UserService {}
interface IUser {}
```
