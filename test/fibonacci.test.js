   import { fibonacci } from '../src/fibonacci.js';

   describe('fibonacci(n)', () => {
     test('devuelve 0 cuando n = 0', () => {
       expect(fibonacci(0)).toBe(0);
     });

     test('devuelve 1 cuando n = 1', () => {
       expect(fibonacci(1)).toBe(1);
     });

     test('devuelve 1 cuando n = 2 (0 + 1)', () => {
       expect(fibonacci(2)).toBe(1);
     });

     test('devuelve 2 cuando n = 3 (1 + 1)', () => {
       expect(fibonacci(3)).toBe(2);
     });

     test('devuelve 55 cuando n = 10', () => {
       expect(fibonacci(10)).toBe(55);
     });

     test('devuelve 6765 cuando n = 20', () => {
       expect(fibonacci(20)).toBe(6765);
     });

     test('lanza RangeError con el mensaje correcto si n es negativo', () => {
       expect(() => fibonacci(-1)).toThrow(RangeError);
       expect(() => fibonacci(-1)).toThrow('solo números enteros ≥ 0');
     });

     test('lanza RangeError si n es decimal', () => {
       expect(() => fibonacci(2.5)).toThrow(RangeError);
     });

     test('lanza RangeError si n no es un número', () => {
       expect(() => fibonacci('5')).toThrow(RangeError);
     });
   });