import { hexToRgb } from '../src/utils/hexToRgb.js';

describe('hexToRgb()', () => {
  test('converts 6‑digit hex correctly', () => {
    expect(hexToRgb('#ff00aa')).toEqual({ r: 255, g: 0, b: 170 });
    expect(hexToRgb('00ff00')).toEqual({ r: 0, g: 255, b: 0 });
  });

  test('converts 3‑digit shorthand', () => {
    expect(hexToRgb('#abc')).toEqual({ r: 170, g: 187, b: 204 });
    expect(hexToRgb('123')).toEqual({ r: 17, g: 34, b: 51 });
  });

  test('rejects invalid strings', () => {
    expect(hexToRgb('')).toBeNull();
    expect(hexToRgb('gggggg')).toBeNull(); // non‑hex chars
    expect(hexToRgb('#1234')).toBeNull(); // wrong length
    expect(hexToRgb(null)).toBeNull();
    expect(hexToRgb(123)).toBeNull();
  });
});