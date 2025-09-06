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

## Liskov Substitution Principle (Principio de sustitución de Liskov) (LSP)

## Interface Segregation Principle (Principio de segregación de interfaces) (ISP)

## Dependency Inversion Principle (Principio de inversión de dependencias) (DIP)
