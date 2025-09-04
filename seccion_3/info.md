# Introducción

- Las clases tienen que tener una responsabilidad especifica y clara.
- No deben de tener nombres genéricos para no confundir su propósito.
- Al tener nombres genéricos y responsabilidades poco claras genera confusión en
  el código y dificulta su mantenimiento.
- Las clases deben ser pequeñas y enfocadas en una sola tarea.
- Se debe de priorizar la composición frente a la herencia.
- Se debe mantener el principio de responsabilidad única.

- Los comentarios se debería de mantener al mínimo y solo en casos necesarios.
- Tener muchos comentarios es un indicador de que el código no se explica por si
  mismo y necesita ser refactorizado.
- Los comentarios de deben de explicar "que hace" si no más bien "porque lo
  hace".

# Estructura de Clases

> "El buen código parece estar escrito por alguien a quien le importa" - Michael
> Feathers

- El ideal es que todo el equipo de trabajo cree las clases de la misma manera.
- Es importante que todas nuestras clases tengan una estructura similar para
  facilitar su comprensión y mantenimiento.

## Lista recomendada

- Comenzar con la lista de propiedades
  - Propiedades státicas.
  - Propiedades públicas.
  - Propiedades privadas.
  - Propiedades protegidas.
- Métodos
  - Constructores estáticos.
  - Constructor.
  - Métodos estáticos.
  - Métodos privados.
  - Métodos de instancia ordenados de mayor a menor importancia.
  - Getters y Setters.

# Comentarios en el código

> "No comentes el código mal escrito, reescríbelo" - Brian W. Kernighan

Evita usar comentarios pero:

Cuando usamos librerías de terceros, APIS, frameworks, etc. nos encontramos ante
situaciones en las que escribir un comentario será mejor que dejar una solución
compleja o un hack sin explicación. Los comentarios deberían de ser la
excepción, no la regla.

**Recuerda:** Nuestro código debe de ser suficientemente auto explicativo,
**Pero a veces es necesario comentarlo.**

Los comentarios deben de explicar el "por qué" en lugar del "qué" o "cómo".

# Uniformidad en el proyecto.

Problemas similares, soluciones similares.

Debemos respetar la nomenclatura en el nombramiento de archivo, clases, métodos
y variables.

Ejemplo:

```javascript
const createProduct = () => {
};

const updateProduct = () => {
};

const deleteProduct = () => {
};
```

```javascript
const createNewUser = () => {
};

const modifyUser = () => {
};

const removeUser = () => {
};
```

En el segundo bloque de código, se está usando una nomenclatura diferente a la
primera, esto no debería de ocurrir.

Es importante mantener la nomenclatura consistente en los directorios y
archivos.

Tambien es importante mantener un estandar de identación en todos los archivos,
esto se debe de acordar con el equipo de trabajo o por proyecto para mantener el
estandar en todo el código.
