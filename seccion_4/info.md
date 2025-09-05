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
