# Arreglos - arrays

- Pluralizar sus nombres
- CamelCase para los nombres de las variables

Mal nombre

```javascript
const fruit = ["manzana", "platano", "fresa"];
```

Nombre regular

```javascript
const fruitList = ["manzana", "platano", "fresa"];
```

Mal nombre

```javascript
const fruits = ["manzana", "platano", "fresa"];
```

Mejor nombre

```javascript
const fruitNames = ["manzana", "platano", "fresa"];
```

# Booleanos - Booleans

- Usualmente tienen 2 valores: verdadero (true) o falso (false).
- Utilizar prefijos como `"is"`, `"has"` o `"can"` para nombrar variables
  booleanas.

Malos nombres

```javascript
const open = true;
const write = false;
const fruit = true;
const active = true;
const noValues = true;
const notEmpty = true;
```

Mejores nombres

```javascript
const isOpen = true;
const canWrite = false;
const hasFruit = true;
const isActive = true;
const hasValues = false;
const isEmpty = false;
```

# Números

- Usar `min`, `max`, `total`, `of` cuando corresponda.

Malos nombres

```javascript
const fruits = 3;
const cars = 10;
```

Mejores nombres

```javascript
const maxFruits = 3;
const minFruits = 1;
const totalFruits = 5;
const totalOfCars = 10;
```

# Funciones

Deben de representar acciones que por lo general deben de construirse usando el
verbo que representa la acción seguido de un sustantivo.

Deben ser bien descriptivos y concisos, evitando la ambigüedad y que no explique
toda la función en el nombre.

Malos nombres

```javascript
createUserIfNotExists();
updateUserIfNotEmpty();
sendEmailFieldsValid();
```

Mejores nombres

```javascript
createUser();
updateUser();
sendEmail();
```
