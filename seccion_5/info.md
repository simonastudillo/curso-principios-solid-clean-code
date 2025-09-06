# Principios SOLID

Existen para ayudarnos a escribir un mejor código y evitar los "code smells",
recuerda que son principios y no reglas, es decir son guías que nos ayudan a
tomar decisiones de diseño más informadas.

Los principios SOLID nos indican cómo organizar nuestas funciones y estructuras
de datos en componentes y cómo dichos componentes deben interactuar entre sí.

## Single Responsibility Principle (Responsabilidad única) (SRP)

> "Nunca debería haber más de una razón para cambiar una clase". - Robert C.
> Martin

Una clase debe de tener una única responsabilidad, tener más de una
responsabilidad hace que nuestro código sea difícil de entender, testear y
mantener. Hace que el código sea menos flexible, más rígido y en menos tolerante
al cambio.

> "Tener una única responsabilidad no significa hacer una única cosa"

### Como detectar violaciones SRP

- Nombres de clases y/o módulos demasiado genéricos.
- Cambios en el código suelen afectar la clase o módulo completo.
- La clase involucra múltiple capas (presentación, dominio, infraestructura,
  datos).
- Número elevado de importaciones.
- Cantidad elevada de métodos públicos.
- Excesivo número de líneas de código.

## Open/Closed Principle (Principio de abierto/cerrado) (OCP)

> Es un principio que depende mucho del contexto.

Establece que las entidades de software (clases, módulos, funciones, etc.) deben
estar abiertas para la extensión, pero cerradas para la modificación.

La forma más sencilla de demostrar este principio es considerar un método que
hace una cosa.

Ejemplo:

- Escribir en un archivo de texto hola.txt
- Nuevos requisitos son escribir en un archivo adios.txt
- Si necesitamos cambiar la función para cambiar el nombre del archivo,
  tendríamos que modificar el código existente, esto viola el principio de
  abierto/cerrado.
- Para cumplir el principio la función o método debería recibir el nombre del
  archivo como parámetro.
- La modificación se hace en la llamada a la función, no en la función misma.

El principio de abierto/cerrado también se puede lograr de muchas otras maneras,
incluso mediante el uso de la herencia o mediante patrones de diseño de
composición como el patrón de estrategia.

### Como detectar violaciones OCP

- Cambios normalmente afectan nuestra clase o módulo.
- Cuando una clase o módulo afecta muchas capas (Presentación, almacenamiento,
  etc).
- La clase o módulo tiene un alto acoplamiento con otras clases o módulos.

## Liskov Substitution Principle (Principio de sustitución de Liskov) (LSP)

> "Las funciones que utilicen punteros o referencias a clases base deben ser
> capaces de usar objetos de clases derivadas sin saberlo" - Robert C. Martin

El nombre proviene de la Doctora Jane Huberman, más conocida como Barbara
Liskov, recibió el premio Turing en 2008.

> "Siendo U un subtipo de T, cualquier instancia de T debería poder ser
> sustituida por cualquier instancia de U sin alterar las propiedades del
> sistema".

## Interface Segregation Principle (Principio de segregación de interfaces) (ISP)

> "Los clientes no deberían verse forzados a depender de interfaces que no
> utilizan" - Robert C. Martin

Este principio establece que es mejor tener muchas interfaces específicas en
lugar de una única interfaz general. Esto permite que las clases implementen
solo los métodos que realmente necesitan, evitando la implementación de métodos
innecesarios.

### Detectar violaciones ISP

- Si las interfaces que diseñamos nos obligan a violar los principios de
  responsabilidad única y substitución de Liskov.
- Si los clientes de una interfaz no utilizan todos los métodos que esta define.

## Dependency Inversion Principle (Principio de inversión de dependencias) (DIP)

> "Los módulos de alto nivel no deberían depender de módulos de bajo nivel.
> Ambos deben depender de abstracciones. Las abstracciones no deberían depender
> de los detalles. Los detalles deberían depender de las abstracciones." -
> Robert C. Martin

Los componentes más importantes son aquellos centrados en resolver el problema
subyacente al negocio, es decir la capa dominio. Los menos importantes son las
que están próximos a la infraestructura, es decir, aquellos relacionados con la
UI, la persistencia, la comunicación con APIs externas, etc.

Ej: Si quisiéramos cambiar de una base de datos de archivos JSON a MongoDB, no
deberíamos tener que modificar la lógica de negocio, sino solo la implementación
de la persistencia. No deberíamos tener que tocar el código de la capa de
dominio, solo modificar el adaptador correspondiente.

Ej: Si un web service necesita cambiar la forma en que se serializan los datos,
no debería tener que modificar la lógica de negocio, sino solo la implementación
de la serialización, nuevamente modificando el adaptador correspondiente no el
código de la capa de dominio.

Ej: Cambiar de React a Angular no debería de afectar las demás capas ni la
lógica de negocio.

### Depender de abstracciones

Nos estamos refiriendo a clases abstractas o interfaces.

Uno de los motivos más importantes por el cual las reglas de negocio o capa de
dominio deben depender de estas y no de concreciones es que aumenta su
tolerancia al cambio.

**¿Por qué obtenemos este beneficio?**

Cada cambio en un componente abstracto implica un cambio en su implementación.

Por el contrario, los cambios en implementaciones concretas, la mayoría de las
veces, no requieren cambios en las interfaces que implementan.

### Inyección de dependencias

Dependencia en programación, significa que un módulo o componente requiere de
otro para poder realizar su trabajo.

En algún momento nuestro programa o aplicación llegará a estar formado por
muchos módulos. Cuando esto pase, es cuando debemos usar inyección de
dependencias.

**Es mejor inyectar dependencias en el constructor de la clase a inicializar la
dependencia directamente dentro de la clase.**
