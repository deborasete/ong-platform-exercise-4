# NGO - Non-Governmental Organization - Digital Platform: Volunteer & Social Management

This repository hosts the front-end foundation for a comprehensive web platform designed to assist Brazilian Non-Governmental Organizations (NGOs). The goal is to provide a professional digital space for managing activities, promoting social projects, and streamlining **volunteer engagement**.

- You can visit the live site here: https://ong-platform.vercel.app/

## GitFlow - Branching Strategy

This project follows the GitFlow branching strategy, which organizes development into separate branches to ensure a clean, continuous, and safe workflow.

### Creating the develop Branch

The develop branch serves as the main branch for ongoing development.
It contains the latest stable code that will eventually be merged into the main branch.

#### Create a new develop branch from the main branch:
```bash 
git checkout -b develop
```

#### Push the develop branch to the remote repository:
```bash
git push -u origin develop
```

### Creating a Feature Branch

Each new feature should be developed in its own branch derived from develop.
This makes it easier to manage versions, review code, and integrate changes safely.

Example for the WCAG (Web Accessibility) feature:

#### Create a feature branch from develop:
```bash
git checkout -b feature/wcag
```

#### Push the feature branch to the remote repository:
```bash
git push -u origin feature/wcag
```

## Accessibility - WCAG

<img width="1918" height="908" alt="image" src="https://github.com/user-attachments/assets/9e17e12f-1879-45b7-bca0-c55c7d0902e5" />

## Technologies

- **React** 18.2.0 - JavaScript library for building user interfaces
- **React Router DOM** 6.20.0 - Routing and navigation between pages
- **CSS3** - Custom styling with CSS variables
- **JavaScript (ES6+)** - Logic and functionality
- **Create React App** - Project configuration and build

## How to Run the Project

### Prerequisites
- Node.js (version 14 or higher)
- npm (package manager)

### Installation and Execution

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm start
```

The application will automatically open at `http://localhost:3000`

### Production Build

To create an optimized production version:

```bash
npm run build
```

Optimized files will be generated in the `build/` folder
