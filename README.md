# Forum 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white&logoWidth=20)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white&logoWidth=20) 
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white&logoWidth=20) 
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white&logoWidth=20) 
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white&logoWidth=20) 


This repository handles the server-side functionalities of an educational forum. Built with Domain-Driven Design (DDD) and Clean Architecture principles. The backend is responsible for managing user authentication, handling discussion threads, and storing and retrieving data. This backend serves as the core for collaboration between students and teachers, providing a API to manage questions, answers, notifications, and other features.

## 📋 Contents

- [🛠️ Features](#️-features)
- [🚀 Technologies Used](#-technologies-used)
- [💾 Setup and Installation](#-setup-and-installation)
- [⚙️ How to Run](#️-how-to-run)
- [🧪 Running Tests](#-running-tests)

## 🛠️ Features

- User registration and authentication.
- Create, edit, and delete questions and answers.
- Comment on questions and answers.
- Mark the best answer for a question.
- Notifications for key forum interactions.
- File uploads and attachment management by Cloudflare R2.

- ## 🚀 Technologies Used

- [Nest.js](https://nestjs.com) - A progressive Node.js framework.
- [Prisma](https://www.prisma.io) - ORM for database access.
- [Vitest](https://vitest.dev) - Unit and e2e testing.
- [Docker](https://www.docker.com) - Containerization for execution.
- [Redis](https://redis.io) - Caching for performance optimization.
- [CloudFlare R2](https://www.cloudflare.com/pt-br/) - Upload and storage of attachments

## 💾 Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DanielF-Cardoso/forum-nest.git
   ```
2. **Run Docker:** To use Redis and Postgress services with Docker
   ```bash
   docker-compose up -d
   ```        
3. **Set up environment variables:** Create a .env file based on the provided example
   ```bash
   cp .env-example .env
   ```   
4. **Install dependencies:**
   ```bash
   npm install
   ``` 
5. **Set up the database:** Ensure Prisma is properly configured and apply migrations
   ```bash
   npx prisma migrate dev
   ```      

## ⚙️ How to Run

1. **Run the application locally:**
   ```bash
   npm run start:dev
   ```

## 🧪 Running Tests

 - **Run the Unit test:**
   ```bash
   npm run test
   ```
 - **Run the Unit tests in watch mode:**
   ```bash
   npm run test:watch
   ```
 - **Run the Unit tests with coverage:**
   ```bash
   npm run test:cov
   ```
 - **Run end-to-end tests:**
   ```bash
   npm run test:e2e
   ```
 - **Run end-to-end tests in watch mode:**
   ```bash
   npm run test:watch
   ```   


