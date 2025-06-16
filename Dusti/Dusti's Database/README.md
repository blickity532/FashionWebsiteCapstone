# Simple Backend for Appointment Scheduling

This project provides a simple backend using Node.js and Express to handle appointment scheduling data.

## Features

- Retrieve all appointments via `GET /api/appointments`
- Add a new appointment via `POST /api/appointments`

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node server.js
   ```

## Endpoints

- `GET /api/appointments`: Retrieve all appointments.
- `POST /api/appointments`: Add a new appointment.

## Data Storage

Appointment data is stored in `appointments.json` as a JSON array.
