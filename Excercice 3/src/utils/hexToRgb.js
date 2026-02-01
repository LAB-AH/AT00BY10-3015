/**
 * Convert a hex colour string to an { r, g, b } object.
 *
 * Accepted formats:
 *   - "#ff00aa"
 *   - "ff00aa"
 *   - "#f0a"
 *   - "f0a"
 *
 * Returns null if the input is not a valid hex colour.
 *
 * @param {string} hex
 * @returns {{r:number,g:number,b:number}|null}
 */
export function hexToRgb(hex) {
  if (typeof hex !== 'string') return null;

  // Remove leading #
  const cleaned = hex.replace(/^#/, '');

  // 3‑digit shorthand (e.g. "f0a") → expand to 6 digits
  const fullHex = cleaned.length === 3
    ? cleaned.split('').map(ch => ch + ch).join('')
    : cleaned;

  // Must now be exactly 6 hex characters
  if (!/^[0-9a-fA-F]{6}$/.test(fullHex)) return null;

  const num = parseInt(fullHex, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;

  return { r, g, b };
}