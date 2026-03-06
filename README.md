# BioPredict Full-Stack Application

This repository contains the BioPredict medical AI analysis platform, featuring a React frontend and a Node.js/Express backend.

## Project Structure

- `/backend`: Node.js + Express + TypeScript API server.
- `/frontend`: React + Vite + Tailwind CSS frontend application.
- `/dist`: Production-ready built frontend files (generated after build).

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (running locally or a remote Atlas URI)

### Installation

Install dependencies for all parts of the project:

```bash
npm run install:all
```

### Configuration

1. Create a `.env` file in the `/backend` directory.
2. Add the following variables:

```env
DATABASE=your_mongodb_uri
DATABASE_PASSWORD=your_database_password (if applicable)
PORT=8000
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
NODE_ENV=development
```

### Running the Application

#### Development Mode

To run both the frontend and backend concurrently with hot-reloading:

```bash
npm run dev
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`

#### Production Mode

To build the frontend and start the single-server production setup:

```bash
npm run build
npm start
```

The application will be accessible at `http://localhost:8000`.

## API Documentation

Base URL: `http://localhost:8000/api/v1`

See `/backend/API.md` for detailed endpoint information.
