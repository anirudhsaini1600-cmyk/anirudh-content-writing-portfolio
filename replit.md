# Overview

This is a professional single-page portfolio website for Anirudh Saini, a Content Writer & Digital Marketer. The application is built as a full-stack React/TypeScript application with an Express.js backend, designed to showcase Anirudh's professional services, portfolio, and contact information. The website emphasizes SEO optimization, modern design, and mobile responsiveness to effectively present his content writing and digital marketing expertise.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using **React 18** with **TypeScript** and follows a modern component-based architecture:

- **Framework**: React with TypeScript for type safety and better developer experience
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom shadcn/ui components for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack React Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

The application uses a single-page design with smooth scrolling navigation between sections (Hero, About, Services, Portfolio, Skills, Contact). Components are organized in a modular structure with reusable UI components in the `components/ui` directory.

## Backend Architecture

The backend follows a minimal **Express.js** architecture designed for potential future expansion:

- **Framework**: Express.js with TypeScript
- **Architecture Pattern**: RESTful API design with route-based organization
- **Development Setup**: Hot reloading with tsx and Vite integration
- **Error Handling**: Centralized error handling middleware
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)

The backend currently uses a placeholder storage system with a clean interface that can be easily replaced with a database implementation when needed.

## Data Storage Architecture

**Current State**: In-memory storage using a Map-based implementation for user data
**Database Ready**: Drizzle ORM configured with PostgreSQL schema definitions
**Migration System**: Drizzle Kit for database migrations and schema management

The application includes a complete database schema setup with user authentication models, even though the current implementation uses memory storage. This allows for easy migration to PostgreSQL when database functionality is needed.

## Styling and Design System

**Component Library**: Custom implementation using Radix UI primitives wrapped with Tailwind CSS
**Design Tokens**: CSS custom properties for consistent theming (colors, spacing, typography)
**Typography**: Poppins font family for modern, professional appearance
**Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
**Dark Mode Support**: Built-in dark mode capabilities through CSS variables

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for modern React development
- **Routing**: Wouter for lightweight client-side navigation
- **Build Tools**: Vite for development and production builds, TypeScript for type safety

## UI and Design Dependencies
- **Component Primitives**: Comprehensive Radix UI component suite for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **Icons**: Lucide React for consistent icon system
- **Animations**: Class Variance Authority for component variant management

## Data and State Management
- **Server State**: TanStack React Query for API state management and caching
- **Form Validation**: Zod for runtime type validation and schema definition
- **Database ORM**: Drizzle ORM with PostgreSQL support for future database integration

## Development and Deployment
- **Database**: Neon serverless PostgreSQL (configured but not actively used)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development Tools**: Replit-specific plugins for development environment integration
- **Date Handling**: date-fns for date manipulation and formatting

## Potential Integration Points
The architecture supports easy integration of:
- Email services for contact form submissions
- Content Management Systems for portfolio updates
- Analytics platforms for tracking visitor engagement
- SEO optimization tools and meta tag management