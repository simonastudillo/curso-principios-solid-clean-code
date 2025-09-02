## Nombre de variables y clases y funciones

Evitar el uso de guiones bajos en el nombre de las variables y funciones. En su
lugar, se prefiere el uso de camelCase (salvo excepciones como Python donde se
recomienda snake_case).

Evitar ahorrarse caracteres al nombrar variables y funciones, clases e
interfaces.

**Recomendaciones:**

- Nombres de variables y funciones: `camelCase`
- Nombres de clases e interfaces: `UpperCamelCase`
- Se recomienda el uso de nombres en `ingles`.
- Se deben de evitar la información técnica en los nombres.

Ejemplos de malos nombres de variables y funciones

```javascript
const n = 53;
const tx = 0.15;
const cat = "T-shirts";
const ddmmyyyy = new Date(2023, 2, 15);
```

Ejemplos de buenos nombres de variables y funciones

```javascript
const numberOfUnits = 53;
const taxRate = 0.15;
const category = "T-shirts";
const birthDate = new Date(2023, 2, 15);
```

Ejemplos de malos nombres de clases e interfaces

```javascript
class AbstractUser {}
class UserMixin {}
class UserImplementation {}
interface UserInterface {}
```

Ejemplos de buenos nombres de clases e interfaces

```javascript
class User {}
class UserProfile {}
class UserService {}
interface IUser {}
```
