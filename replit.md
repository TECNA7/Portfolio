# Overview

This is a full-stack portfolio website built with React, TypeScript, and Express.js. The application features a modern, whimsical design showcasing personal projects, blog posts, an about section, and even a candles e-commerce section. It uses a monorepo structure with shared schema definitions and includes both frontend and backend components, though the backend is currently minimal with basic route scaffolding.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite with custom configuration for development and production

## Backend Architecture  
- **Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM configured for PostgreSQL
- **Storage Interface**: Abstract storage interface with in-memory implementation (MemStorage class)
- **API Structure**: RESTful API with `/api` prefix (routes currently scaffolded but not implemented)
- **Development**: Hot module replacement with Vite integration in development mode

## Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared schema definitions in TypeScript using Drizzle and Zod
- **Migration**: Drizzle Kit for database migrations
- **Current Schema**: Users table with id, username, and password fields
- **Database Provider**: Configured for Neon serverless PostgreSQL

## Design System
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Theme**: Custom color system with CSS variables supporting light/dark modes
- **Typography**: Multiple font families including Playfair Display (serif), Inter (sans), and custom Google Fonts
- **Animations**: Custom CSS animations for floating elements, section reveals, and typing effects

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database for production
- **Connection**: Uses DATABASE_URL environment variable for connection string

## UI/UX Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **shadcn/ui**: Pre-built components using Radix UI and Tailwind CSS
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider functionality

## Development Tools
- **Vite**: Frontend build tool and development server
- **Replit Plugins**: Development banner, error overlay, and cartographer for Replit integration
- **ESBuild**: Backend bundling for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

## Form Handling
- **React Hook Form**: Form state management and validation
- **Hookform Resolvers**: Integration with Zod for schema validation

## Utility Libraries
- **clsx & Tailwind Merge**: Conditional CSS class composition
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **class-variance-authority**: Type-safe variant-based component styling