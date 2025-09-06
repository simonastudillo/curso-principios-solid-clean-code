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

## Liskov Substitution Principle (Principio de sustitución de Liskov) (LSP)

## Interface Segregation Principle (Principio de segregación de interfaces) (ISP)

## Dependency Inversion Principle (Principio de inversión de dependencias) (DIP)
