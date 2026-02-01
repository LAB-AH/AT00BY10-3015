import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/hex-to-rgb/:hex', () => {
  test('returns correct JSON for a valid hex colour', async () => {
    const response = await request(app).get('/api/hex-to-rgb/ff00aa');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      hex: '#ff00aa',
      rgb: { r: 255, g: 0, b: 170 },
    });
  });

  test('accepts leading "#"', async () => {
    const response = await request(app).get('/api/hex-to-rgb/#0f0');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      hex: '#0f0',
      rgb: { r: 0, g: 255, b: 0 },
    });
  });

  test('responds 400 for an invalid hex', async () => {
    const response = await request(app).get('/api/hex-to-rgb/zzzzzz');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Invalid hex colour' });
  });
});