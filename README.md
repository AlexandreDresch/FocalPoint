# FocalPoint

FocalPoint is a simple to-do list application built with Next.js. The goal is to provide a fast and efficient way to create and manage daily tasks.

Visit [FocalPoint](https://focal-point-eta.vercel.app)

## Features

- Add and remove tasks
- Mark tasks as completed
  -Modal for managing tasks

## Technologies Used

- Next.js: React framework for page rendering.
- TypeScript: Typed superset of JavaScript.
- Zod: TypeScript-first schema declaration and validation library.
- SCSS: CSS preprocessor for cleaner styles.
- React-hook-form: Simple and performant form validation library for React, enabling easier form handling and input validation.
- Redux Toolkit: Global state management.
- Docker: Containerization for easier packaging and deployment.

## Installation and Running the Project

### Without Docker:

#### Clone the repository:

```bash
git clone https://github.com/AlexandreDresch/FocalPoint.git
```

#### Install dependencies:

```bash
cd FocalPoint
npm install
```

#### Run the application in development mode:

```bash
npm run dev
```

#### Access the app in your browser:

[localhost](http://localhost:3000)

### With Docker:

#### Clone the repository:

```bash
git clone https://github.com/AlexandreDresch/FocalPoint.git
```

#### Build the Docker image:

```bash
docker build -t FocalPoint .
```

#### Run the container:

```bash
docker run -p 3000:3000 FocalPoint
```

#### Access the app in your browser:

[localhost](http://localhost:3000)

### Using Docker Compose

If you prefer Docker Compose, follow these steps:

#### Start the container:

```bash
docker-compose up
```

#### Access the app in your browser:

[localhost](http://localhost:3000)


## Project Structure
```bash
├── app            # Next.js pages, layout and global css
├── components       # Reusable components like Button, Modal, TaskItem
├── lib              # Redux configuration and hooks
├── public           # Static assets
├── schemas           # application schemas
├── types          # types used in the application
├── utils           # utility functions
├── Dockerfile       # Docker container definition
├── docker-compose.yml # Optional Docker Compose configuration
└── README.md        # Project documentation
```