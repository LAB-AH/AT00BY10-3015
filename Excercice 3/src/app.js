import express from 'express';
import { hexToRgb } from './utils/hexToRgb.js';

const app = express();

// Optional: enforce JSON responses
app.use(express.json());

/**
 * GET /api/hex-to-rgb/:hex
 *
 * Path param `hex` can be with or without leading '#'.
 *
 * Success (200):
 *   { "hex": "#ff00aa", "rgb": { "r": 255, "g": 0, "b": 170 } }
 *
 * Error (400):
 *   { "error": "Invalid hex colour" }
 */
app.get('/api/hex-to-rgb/:hex', (req, res) => {
  const { hex } = req.params;
  const rgb = hexToRgb(hex);

  if (!rgb) {
    return res.status(400).json({ error: 'Invalid hex colour' });
  }

  // Normalise output to always include leading '#'
  const normalizedHex = hex.startsWith('#') ? hex : `#${hex}`;

  res.json({
    hex: normalizedHex,
    rgb,
  });
});

export default app;