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
