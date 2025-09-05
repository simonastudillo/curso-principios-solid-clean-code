# Acrónimo STUPID

STUPID es un acrónimo que representa una serie de principios tambien llamados
"code smells" que deben evitarse en el desarrollo de software:

- **S**: Singleton => Patrón singleton.
- **T**: Tight Coupling => Alto acoplamiento.
- **U**: Untestability => Código no probable (unit test)
- **P**: Premature optimization => Optimización prematura.
- **I**: Indescriptive Naming => Nombres poco descriptivos.
- **D**: Duplication => Duplicidad de código, no aplicar el principio DRY.

## Patrón singleton

- **PROS**

- Garantiza una única instancia de la clase a lo largo de toda la aplicación.

- **CONS**

- Vive en el contexto global.
- Puede ser modificado por cualquiera y en cualquier momento.
- No es rastreable.
- Difícil de testear debido a su ubicación.

## Alto acoplamiento y baja cohesión.

Lo ideal es tener un bajo acoplamiento y una alta cohesión. Esto se refiere a
cuán relacionadas o dependientes son dos clases o módulos entre sí.

### Acoplamiento

- **En bajo acoplamiento**, cambiar algo importante en una clase no debería
  afectar a otras clases.
- **En alto acoplamiento**, dificultarí el cambio y el mantenimiento de su
  código; dado que las clases están muy unidas, hacer un cambio podría requerir
  una renovación completa del sistema.

- **Desventajas de alto acoplamiento**

- Un cambio en un módulo por lo general provoca un efecto dominó de los cambios
  en otros módulos.
- El ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a la
  mayor dependencia entre módulos.
- Un módulo en particular puede ser más difícil de reutilizar y/o probar porque
  se deben incluir módulos dependientes.

- **Posibles soluciones**

- "A" tiene un atributo que se refiere a "B".
- "A" llama a los servicios de un objeto "B".
- "A" tiene un método que hace referencia a "B" (a través del tipo de retorno o
  parámetro)
- "A" es una subclara de (o implementa) la clase "B"

> "Queremos diseñar componentes que sean auto-contenidos, auto suficientes e
> independientes. Con un objetivo y un propósito bien definido." - The pragmatic
> Programmer

### **Cohesión**

- La cohesión se refiere a lo que la clase (o módulo) puede hacer.
- La baja cohesión significa que la clase realiza una gran variedad de acciones:
  es amplia, no se enfoca en lo que debe hacer.
- Alta cohesión significa que la clase se enfoca en lo que debería estar
  haciendo, es decir, solo métodos relacionados con la intención de la clase.

## Código no probable

Código difícilmente testeable

- Código con alto acoplamiento.
- Código con muchas dependencias no inyectadas.
- Dependencias en el contexto global (Tipo Singleton).

> Debemos de tener en mente las pruebas desde la creación del código.

## Optimizaciones prematuras

- Mantener abiertas las opciones retrasando la toma de decisiones nos permite
  darle mayor relevancia a lo que es más importante en una aplicación.
- No debemos anticiparnos a los requisitos y desarrollar abstracciones
  innecesarias que puedan añadir complejidad accidental.

### Complejidad accidental

Cuando implementamos una solución compleja a la mínima indispensable.

### Complejidad esencial

La complejidad es inherente al problema.

Se debe de buscar un equilibrio entre ambas.

## Nombres poco descriptivos.

- Nombre de variables mal nombradas.
- Nombres de clases genéricas.
- Nombres de funciones mal nombradas.
- Ser muy específico (puede ser muy largo y difícil de entender) o demasiado
  genérico (da lugar a confusiones sobre lo que hace).

## Duplicidad de código

No aplicar el principio DRY (Don't Repeat Yourself). Hay 2 tipos de duplicidad
de código:

### Real

- Código es idéntico y cumple la misma función.
- Un cambio implicaría actualizar todo el código idéntico en varios lugares.
- Incrementa las posibilidades de error humano al olvidar una parte para
  actualizar.
- Mayor cantidad de pruebas innecesarias.

### Accidental

- Código luce similar pero cumple funciones distintas.
- Cuando hay un cambio, sólo hay que modificar un sólo lugar.
- Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones.

## "Code Smells" extras.

### Inflación

- Cuando un método contiene demasiadas lineas de código, por lo general de más
  de 10 lineas se debe considerar refactorizar. Esto es porque por lo general
  con el tiempo las funciones y métodos tienden a crecer en complejidad y
  tamaño, lo que puede dificultar su comprensión y mantenimiento.
  - Hay que buscar la forma de crear sub-métodos.
- Clases muy grandes y con el tiempo van creciendo.
  - Hay que buscar la forma de dividirlas en clases más pequeñas y enfocadas.

### Obsesión primitiva

- Se refiere a la tendencia de utilizar tipos de datos primitivos (como enteros,
  cadenas, booleanos, etc.) en lugar de crear tipos de datos más ricos y
  expresivos que encapsulen la lógica y el comportamiento relacionados.
  - Si tiene una gran cantidad de variables de datos primitivos posiblemente se
    pueden agrupar a una nueva clase, función o módulo.

### Lista larga de parámetros

- Más de 3 o 4 argumentos en un método. Una lista larga de parámetros puede
  dificultar la comprensión y el uso del método.
- Las listas largas de parámetros pueden ser un sintoma de forzar a un método
  haga más de lo que debería rompiendo el principio de responsabilidad única.
  - Se puede considerar la creación de un objeto que encapsule todos los
    parámetros relacionados.
  - Se puede considerar crear sub-métodos que manejen grupos de parámetros
    relacionados.
