    const FORMATO_PIN = /^(\d{4}|\d{6})$/;
    const TODOS_IGUALES = /^(\d)\1+$/;

   export function esPinValido(pin) {
     if (typeof pin !== 'string') return false;  
     if (!FORMATO_PIN.test(pin)) return false;   
     return !TODOS_IGUALES.test(pin);            
   }