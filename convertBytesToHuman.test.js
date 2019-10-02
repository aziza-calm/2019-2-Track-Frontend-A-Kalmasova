/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman('string')).toBe(false);
  expect(convertBytesToHuman(true)).toBe(false);
  expect(convertBytesToHuman([1, 2, 3])).toBe(false);
  expect(convertBytesToHuman({})).toBe(false);
  expect(convertBytesToHuman({1 : 'true', "o" : 890})).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(123)).toBe('123.00 B');
  expect(convertBytesToHuman(1024)).toBe('1.00 KB');
  expect(convertBytesToHuman(123456789)).toBe('117.74 MB');
  expect(convertBytesToHuman(123456789012)).toBe('114.98 GB');
  expect(convertBytesToHuman(9879)).toBe('9.65 KB');
});