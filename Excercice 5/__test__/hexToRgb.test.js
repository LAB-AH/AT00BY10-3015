const { hexToRgb } = require('../hexToRgb');

describe('hexToRgb()', () => {
  test('converts full‑length hex (lowercase) correctly', () => {
    expect(hexToRgb('ff00aa')).toEqual({ r: 255, g: 0, b: 170 });
  });

  test('accepts leading "#" and uppercase letters', () => {
    expect(hexToRgb('#00FF33')).toEqual({ r: 0, g: 255, b: 51 });
  });

  test('expands short 3‑digit notation', () => {
    expect(hexToRgb('0f8')).toEqual({ r: 0, g: 255, b: 136 });
  });

  test('throws on invalid characters', () => {
    expect(() => hexToRgb('zzzzzz')).toThrow('Invalid HEX colour');
  });

  test('throws on wrong length', () => {
    expect(() => hexToRgb('12345')).toThrow('Invalid HEX colour');
  });
});