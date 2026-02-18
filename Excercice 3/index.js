const express = require('express');
const { hexToRgb } = require('./hexToRgb');

const app = express();
const PORT = process.env.PORT || 3000;

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

// Start the server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Hex‑to‑RGB API listening on http://localhost:${PORT}`);
  });
}

// Export the app for supertest/Jest integration testing
module.exports = app;