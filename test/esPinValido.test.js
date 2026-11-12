import {describe, test, expect} from 'vitest'
import {esPinValido} from '../src/esPinValido.js';

describe('esPinValido(pin)', () => {
    describe('devuelve true con PINes válidos', () => {
        test('PIN de 4 dìgitos', () => {
            expect(esPinValido('1234')).toBe(true);
        });
        test('PIN de 6 dìgitos', () => {
            expect(esPinValido('482913')).toBe(true);
        });
        test('PIN que empieza por 0', () => {
            expect(esPinValido('0571')).toBe(true);
        });
        test('PIN con dígitos repetidos pero no todos iguales', () => {
            expect(esPinValido('1121')).toBe(true);
        });
    });

    describe('devuelve false con PINes inválidos', () => {
        test('null', () => {
            expect(esPinValido(null)).toBe(false);
        });
        test('undefined', () => {
            expect(esPinValido(undefined)).toBe(false);
        });
        test('cadena vacía', () => {
            expect(esPinValido('')).toBe(false);
        });
        test('longitud distante de 4 o 6', () => {
            expect(esPinValido('123')).toBe(false);
            expect(esPinValido('12345')).toBe(false);
            expect(esPinValido('1234567')).toBe(false);
        });
        test('contiene caracteres que no son dígitos', () => {
            expect(esPinValido('12a4')).toBe(false);
            expect(esPinValido('12 4')).toBe(false);
            expect(esPinValido('-123')).toBe(false);
        });
        test('todos los dígitos iguales', () => {
            expect(esPinValido('1111')).toBe(false);
            expect(esPinValido('888888')).toBe(false);
        });

        test('no es un string (un número perdería los ceros a la izquierda)', () => {
            expect(esPinValido(1234567)).toBe(false);
        });
    });
});