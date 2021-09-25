import { Hexa } from '../index';

test('', () => {});

test('HexaConstructorCenterStringOK', () => {
  const hexa = new Hexa<string>(0, 0, 0, 'test');
  expect(hexa.toString()).toBe('Hexa:{q:0;r:0;s:0;type:string}');
});

test('HexaConstructorpNoCenterNumberOK', () => {
  const hexa = new Hexa<number>(1, -2, 1, 0);
  expect(hexa.toString()).toBe('Hexa:{q:1;r:-2;s:1;type:number}');
});

test('HexaConstructorNoCenterObjectOK', () => {
  const hexa = new Hexa<object>(3, 1, -4, {});
  expect(hexa.toString()).toBe('Hexa:{q:3;r:1;s:-4;type:object}');
});

test('HexaConstructorErrorNoEgal0', () => {
  expect(() => new Hexa<object>(3, 1, -3, {})).toThrow('q + r + s must be 0');
});

test('HexaGettersOK', () => {
  const hexa = new Hexa<string>(3, 1, -4, 'test');
  expect(hexa.q).toBe(3);
  expect(hexa.r).toBe(1);
  expect(hexa.s).toBe(-4);
  expect(hexa.data).toBe('test');
});

test('HexaEqualsTrue1', () => {
  const hexa = new Hexa<string>(3, 1, -4, 'test');
  expect(hexa.equals(hexa)).toBe(true);
});

test('HexaEqualsTrue2', () => {
  const hexa1 = new Hexa<string>(3, 1, -4, 'test1');
  const hexa2 = new Hexa<string>(3, 1, -4, 'test2');
  expect(hexa1.equals(hexa2)).toBe(true);
});

test('HexaEqualsFalse', () => {
  const hexa1 = new Hexa<string>(3, 1, -4, 'test1');
  const hexa2 = new Hexa<string>(3, 0, -3, 'test2');
  expect(hexa1.equals(hexa2)).toBe(false);
});

test('HexaDist', () => {
  const hexa1 = new Hexa<string>(0, 0, 0, 'test');
  const hexa2 = new Hexa<string>(2, -3, 1, 'test');
  const hexa3 = new Hexa<string>(3, 1, -4, 'test');
  expect(hexa1.dist(hexa2)).toBe(3);
  expect(hexa2.dist(hexa1)).toBe(3);
  expect(hexa1.dist(hexa3)).toBe(4);
  expect(hexa3.dist(hexa1)).toBe(4);
  expect(hexa2.dist(hexa3)).toBe(5);
  expect(hexa3.dist(hexa2)).toBe(5);
});
