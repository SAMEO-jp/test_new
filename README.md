# Outlook-style Performance Management App

This repository contains a simple example of an Outlook-style performance management application.

## Backend

The backend is an Express server that provides a small set of task management APIs.

```
cd backend
npm install
npm start
```

The server exposes endpoints at `http://localhost:3001/tasks` for creating and retrieving tasks.

## Frontend

The frontend is a React application that displays tasks on a calendar.

```
cd frontend
npm install
npm start
```

The application fetches tasks from the backend and shows them using `react-big-calendar`.
