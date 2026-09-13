# Full Stack .NET Junior Developer Roadmap & LMS Dashboard

[![Live Demo](https://img.shields.io/badge/Live-GitHub%20Pages-0d9488?style=for-the-badge&logo=github)](https://mahmoudabdelbakey.github.io/Full_Stack_Plan/)
[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mahmoud-abd-elbakey)

A complete, modern, responsive, and persistent personal learning management web application built from the ground up for aspiring **Junior / Fresh Full Stack .NET Developers**. 

This is not a static roadmap. It is a full-featured, client-side dashboard with local storage persistence, interactive editing, custom task checklists, interview preparation quizzes, and progress analytics.

---

## Live Demo

Experience the live application deployed on GitHub Pages:
**[https://mahmoudabdelbakey.github.io/Full_Stack_Plan/](https://mahmoudabdelbakey.github.io/Full_Stack_Plan/)**

---

## Key Features

### 1. 24 Comprehensive Learning Phases (Zeroed Out for a Fresh Start)
- Covers the entire journey:
  1. C# Fundamentals
  2. Object-Oriented Programming (OOP)
  3. Advanced C# (.NET Generics, LINQ, Asynchronous `async`/`await`, Memory Management)
  4. SQL Server & T-SQL Relational Databases
  5. Relational Database Design & Normalization
  6. LINQ & Query Syntax Mastery
  7. Entity Framework Core (Code-First, Migrations, Fluent API)
  8. HTTP Protocols & RESTful API Architecture
  9. ASP.NET Core Web API Core & Pipeline
  10. Authentication & Authorization (JWT, Claims, Identity)
  11. Clean Architecture & Design Patterns (Repository, Unit of Work, CQRS)
  12. Validation, Error Handling & Global Filters
  13. Automated Unit Testing & Integration Testing (xUnit, Moq)
  14. Caching & Performance Optimization (Redis, In-Memory)
  15. Background Processing & Messaging (Hangfire, RabbitMQ)
  16. Docker Containers & Containerization
  17. Frontend Fundamentals (Semantic HTML5 & Modern CSS3)
  18. JavaScript ES6+ & TypeScript Mastery
  19. Modern Frontend Framework (Angular or React)
  20. Real-time Communication (SignalR)
  21. Git, GitHub & CI/CD Pipelines
  22. Cloud Deployment & Azure Basics
  23. Production Observability, Logging (Serilog) & Health Checks
  24. Portfolio Projects & Job Preparation
- **Full In-Browser CRUD**: Add new phases, edit existing phases and phase hours, delete phases, or add/edit/delete topics and subtasks inside any phase.

### 2. Suggested Real-World Portfolio Projects
- 5 enterprise-grade project architectures ready to build:
  1. **Enterprise E-Commerce API & Admin Dashboard** (ASP.NET Core Web API, EF Core, Redis, React/Angular)
  2. **Real-time Task & Project Collaboration Board** (ASP.NET Core Web API, SignalR, JWT, Clean Architecture)
  3. **Healthcare Appointment & Clinic Management System** (Clean Architecture, CQRS / MediatR, Background Jobs)
  4. **Microservices-based Order & Notification System** (ASP.NET Core, RabbitMQ, Docker, Ocelot Gateway)
  5. **Personal Cloud File Vault & Asset Management System** (ASP.NET Core, Azure Blob / MinIO, Image Processing)
- **User-editable GitHub Repository Links**: Add, edit, or remove your personal GitHub repository URL directly from each project card.

### 3. Technical Interview Preparation (100 Deep Questions)
- 100 realistic interview questions covering C#, OOP, ASP.NET Core, EF Core, SQL Server, Architecture, Security, and System Design.
- **Clean 10-per-page Pagination**: Stepper controls with previous/next buttons and page dots for seamless study sessions.
- **Interactive Flashcards / Collapsible Answers**: Test your knowledge before revealing explanations and code examples.

### 4. Interactive Trackers & Checklists
- **Skills Matrix Tracker**: Filter by backend, database, frontend, and DevOps with full CRUD.
- **Technology Stack Tracker**: Visual proficiency bars and status toggles with full CRUD.
- **Junior Job-Readiness Checklist**: Dynamic milestone progress bar with full CRUD.
- **Study Log & Hours Tracker**: Log study sessions with topics and hours dynamically without hardcoded historical dates.
- **Full Data Backup & Restore**: Export your progress to a `.json` backup file anytime, or restore from a previous backup.

---

## Anti-AI Slop Design Principles

The UI was crafted adhering strictly to high-standard software design constraints:
- **Zero Generic Gradients**: Clean, solid slate backgrounds with subtle borders (`#1e293b`).
- **High-Contrast Single Accent**: Focused teal colorway (`#0d9488` / `#14b8a6`).
- **Tabular Numerals & Monospace Fonts**: JetBrains Mono for metrics and percentages, Inter for clean typography.
- **No Floating Emoji Clutter**: Professional SVG icons and clean badges.

---

## Local Development & Usage

No complex toolchains or Node.js server installations are required to run the dashboard. The application is pure modern Vanilla JavaScript, CSS3, and HTML5.

### Option 1: Direct File Open
Simply double-click `index.html` in your file explorer. It will open and run completely offline in your browser.

### Option 2: Local HTTP Server (Optional)
```bash
# Using Python
python -m http.server 8000

# Using Node.js npx
npx serve
```
Then navigate to `http://localhost:8000`.

---

## Project Structure

```text
├── index.html               # Main dashboard markup, navigation, and modal dialogues
├── css/
│   └── styles.css           # Custom dark theme, responsive grid, and pagination styling
├── js/
│   ├── data/
│   │   └── initialData.js   # Master dataset: 24 phases, 100 interview questions, projects
│   ├── storage.js           # LocalStorage engine with schema migration, export/import
│   └── app.js               # Application core: routing, rendering, state management, CRUD
├── DESIGN_RULES.md          # Architectural & design guidelines
└── README.md                # Project documentation
```

---

## Author & Copyright

**Created by Mahmoud Abd_Elbakey**  
- **LinkedIn**: [https://www.linkedin.com/in/mahmoud-abd-elbakey](https://www.linkedin.com/in/mahmoud-abd-elbakey)  
- **GitHub**: [@mahmoudabdelbakey](https://github.com/mahmoudabdelbakey)  

© 2026 Mahmoud Abd_Elbakey. All rights reserved.
