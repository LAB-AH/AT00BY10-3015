# Hex‑to‑RGB API – Quick Reference

***

**Base URL:** http://localhost:3000

## Endpoints

| Method | Path                 | Description                                      | Parameters                                                                                     | Success response                               | Error response                                        |
|--------|-----------------------|--------------------------------------------------|-------------------------------------------------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------|
| GET    | /api/hex-to-rgb/:hex | Convert a HEX colour string to its RGB components. | :hex – väri HEX‑muodossa (esim. ff00aa, #ff00aa, 0f8). Tukee 3‑ ja 6‑merkkisiä muotoja, kirjainkoosta riippumatta. | 200 OK json `{ "r": 255, "g": 0, "b": 170 }` | 400 Bad Request json `{ "error": "Invalid HEX colour" }` |

## Behaviour Details

    Input flexibility – Leading # is optional; short #RGB expands to #RRGGBB.
    Validation – Only characters [0‑9a‑fA‑F] are accepted; any other input yields a 400 error.
    Output – JSON object with integer fields r, g, b ranging from 0‑255.

## Testing
Unit Test (Jest)

    File: __tests__/hexToRgb.test.js
    Covers valid conversions, short‑form expansion, and error handling.

# Integration Test (Postman)

    Import postman_collection.json.
    Two requests: one with a valid hex (ff00aa) expecting 200 and correct RGB, another with an invalid hex (zzz) expecting 400.

# Running Locally
```
# Install dependencies
npm install

# Start the server
npm start   # → http://localhost:3000

# Run unit tests
npm test
```

## Key Features

- Minimal footprint – Single route, no external services.
- Pure conversion logic – hexToRgb() is isolated for easy reuse and testing.
- Robust validation – Guarantees well‑formed output or clear error messages.
- Ready for CI – Jest unit tests + Postman collection enable automated verification.
