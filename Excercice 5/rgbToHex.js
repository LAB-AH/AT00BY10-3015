/**
 * Convert an RGB object to a HEX colour string.
 *
 * Input: { r: 0‑255, g: 0‑255, b: 0‑255 }
 * Output: "#RRGGBB"
 *
 * @param {{r:number,g:number,b:number}} rgb
 * @returns {string} HEX string prefixed with '#'
 * @throws {Error} if any component is out of range or not a number
 */
function rgbToHex({ r, g, b }) {
  const isValid = n => Number.isInteger(n) && n >= 0 && n <= 255;
  if (![r, g, b].every(isValid)) {
    throw new Error('RGB values must be integers between 0 and 255');
  }

  const toHex = n => n.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

module.exports = { rgbToHex };