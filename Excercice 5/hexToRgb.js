/**
 * Convert a HEX colour string to an RGB object.
 *
 * Accepted formats:
 *   "#ff00aa", "ff00aa", "#F0A", "F0A"
 *
 * @param {string} hex - colour in hexadecimal notation
 * @returns {{r:number,g:number,b:number}} RGB components (0‑255)
 * @throws {Error} if the input is not a valid HEX colour
 */
function hexToRgb(hex) {
  // Strip leading '#', if present
  const cleaned = hex.replace(/^#/, '');

  // Expand short form (#RGB → #RRGGBB)
  const normalized =
    cleaned.length === 3
      ? cleaned
          .split('')
          .map(ch => ch + ch)
          .join('')
      : cleaned;

  // Validate length (must be exactly 6 now) and characters
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    throw new Error('Invalid HEX colour');
  }

  // Parse the three colour channels
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);

  return { r, g, b };
}

// Export for use in the server and for unit testing
module.exports = { hexToRgb };