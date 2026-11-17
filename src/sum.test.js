import { Calculator, capitalize, reverseString, sum, caesar, analyzeArray } from './sum.js';


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('hugo', () => {
  expect(capitalize("hugo")).toBe("Hugo");
});

test('random lettre', () => {
  expect(capitalize("&ugo")).toBe("&ugo");
});

test('reverse string', () => {
  expect(reverseString("hugo")).toBe("oguh");
});

const calculator = new Calculator();
test('calculator addition', () => {
  expect(calculator.add(1,2)).toBe(3);
});
test('calculator multiply', () => {
  expect(calculator.multiply(1,2)).toBe(2);
});
test('calculator substract', () => {
  expect(calculator.substract(2,1)).toBe(1);
});
test('calculator division', () => {
  expect(calculator.divide(2,1)).toBe(2);
});

test('caesar', () => {
  expect(caesar("xyz", 3)).toBe("abc");
});

test('caesar Maj', () => {
  expect(caesar("HeLLo", 3)).toBe("KhOOr");
});

test('caesar ponctuation', () => {
  expect(caesar("Hello, World!", 3)).toBe("Khoor, Zruog!");
});


const object = analyzeArray([1,8,3,4,2,6]);

test('analyze array', () => {
  expect(object).toEqual({
    "average": 4,
    "min": 1,
    "max": 8,
    "length": 6
  });
});