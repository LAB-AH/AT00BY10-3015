const express = require('express');
const path    = require('path');
const { hexToRgb } = require('./hexToRgb');
const { rgbToHex } = require('./rgbToHex');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies (not strictly needed for GET, but handy)
app.use(express.json());

/**
 * GET /api/hex-to-rgb/:hex
 *
 * Path parameter `hex` can be supplied with or without a leading '#'.
 * Example: GET /api/hex-to-rgb/ff00aa   →  { "r":255,"g":0,"b":170 }
 */
app.get('/api/hex-to-rgb/:hex', (req, res) => {
  try {
    const rgb = hexToRgb(req.params.hex);
    res.json(rgb);
  } catch (err) {
    // Bad request – client supplied an invalid HEX string
    res.status(400).json({ error: err.message });
  }
});

/**
 * GET /api/rgb-to-hex/:rgb
 *
 * Path parameter `rgb` can be supplied with or without a leading '#'.
 * Example: GET /api/rgb-to-hex/ff00aa   →  { "hex": "#ff00aa" }
 */
app.get('/api/rgb-to-hex', (req, res) => {
  const r = Number(req.query.r);
  const g = Number(req.query.g);
  const b = Number(req.query.b);

  // Basic validation – same rules as the pure helper
  const isValid = n => Number.isInteger(n) && n >= 0 && n <= 255;
  if (![r, g, b].every(isValid)) {
    return res.status(400).json({
      error: 'Query params r, g, b must be integers between 0 and 255'
    });
  }

  try {
    const hex = rgbToHex({ r, g, b });
    res.json({ hex });
  } catch (err) {
    // This branch should rarely fire because we already validated,
    // but we keep it for safety.
    res.status(400).json({ error: err.message });
  }
});

// Start the server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Hex‑to‑RGB API listening on http://localhost:${PORT}`);
  });
}

// Export the app for supertest/Jest integration testing
module.exports = app;