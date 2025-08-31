# Funciones

> "Sabemos que estamos desarrollando código limpio cuando cada función hace
> exactamente lo que su nombre indica". - Ward Cunningham

Ejemplos

```javascript
function sendEamil(): boolean {

   // verificar si el usuario existe

   // Revisar contraseña

   // Crear usuario en Base de datos

   // Si todo sale bien
   return true;
}
```

```javascript
function sendEmail( toWhom: string ): boolean {

   // Verificar correo
   if ( !toWhom.includes('@') ) return false;

   // Construir el cuerpo o mensaje

   // Enviar correo

   // Si todo sale bien
   return true;
}
```

- En los ejemplos las funciones hacen mucho más de lo que su nombre indica.

## Parámetros y argumentos

- Se recomienda limitar a 3 parámetros posicionales.
- Se recomienda crear un objeto con los parámetros o crear funciones auxiliares
  limitando los parámetros a 3 o 1.
- Se recomienda ordenar los parámetros de forma alfabética.

No muy bien:

```typescript
function sendEmail(
   toWhom: string,
   from: string,
   body: string,
   subject: string,
   apiKey: string,
): boolean {}
```

Muy bien:

```typescript
interface EmailParams {
   toWhom: string;
   from: string;
   body: string;
   subject: string;
   apiKey: string;
}

function sendEmail(
   { toWhom, from, body, subject, apiKey }: EmailParams,
): boolean {}
```
