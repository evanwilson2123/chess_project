# Chess Project

React (Vite) frontend with a Node/Express backend.

## Structure

```
chess_project/
├── client/   # React + TypeScript (Vite)
└── server/   # Express + TypeScript
```

## Setup

```bash
npm run install:all
```

## Development

Run both client and server:

```bash
npm run dev
```

- Client: http://localhost:5173
- Server: http://localhost:3001
- API routes are proxied from `/api` → `http://localhost:3001`

Or run them separately:

```bash
npm run dev:client
npm run dev:server
```

## Build

```bash
npm run build
```
