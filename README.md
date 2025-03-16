# ASTRA NextJS Application

## Project Overview

ASTRA is a modern, full-featured web application built with Next.js, React, TypeScript, and Tailwind CSS. It serves as a comprehensive template website and business tool platform, focusing on providing ready-to-use templates across various business categories and specialized tools for specific industries.

The project showcases best practices for Next.js development using the App Router architecture. It features a responsive design with mobile and desktop layouts, interactive UI components, and several specialized functional areas.

### Key Features

- **Template Browser System**: Browse and preview website templates across multiple business categories.
- **Interactive Mega Menu**: Category-based navigation with rich dropdown interfaces.
- **Garment Order Tracking System**: Complete order tracking and management for garment manufacturing.
- **Responsive Design**: Fully responsive UI that adapts to desktop, tablet, and mobile devices.
- **Modular Components**: Highly reusable component library for consistent UI/UX across the application.
- **TypeScript Integration**: Full type safety throughout the codebase.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone this repository:
   ```
   git clone <repository-url>
   cd test-node
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Code Structure

### Top-Level Structure

```
test-node/
├── .next/               # Next.js build output (generated)
├── node_modules/        # Dependencies (generated)
├── public/              # Static assets
├── src/                 # Main source code
│   ├── app/             # App Router pages
│   └── components/      # Reusable UI components
├── .gitignore           # Git ignore file
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

### App Directory Structure

The `/src/app` directory follows Next.js App Router conventions:

```
src/app/
├── about/               # About page
├── contact/             # Contact page
├── features/            # Features page
├── tracker/             # Garment Order Tracker page
├── globals.css          # Global CSS styles
├── layout.tsx           # Root layout component
└── page.tsx             # Home page component
```

Each folder represents a route in the application, with `page.tsx` defining the main content of each page and optional `layout.tsx` files for shared layouts.

### Components Structure

The `/src/components` directory contains all reusable UI components:

```
src/components/
├── AstraHeader/         # Main application header
│   ├── AstraHeader.tsx  # Component implementation
│   └── index.ts         # Barrel export
├── Button.tsx           # Reusable button component
├── Footer.tsx           # Site footer component
├── GarmentOrderTracker/ # Order tracking functionality
│   ├── GarmentOrderTracker.tsx    # Main tracker component
│   ├── Header.tsx                 # Tracker header
│   ├── PhaseTracker.tsx           # Phase visualization
│   ├── TabNavigation.tsx          # Tab interface
│   ├── TaskDetail.tsx             # Task detail view
│   ├── TaskList.tsx               # Task listing
│   ├── mockData.ts                # Demo data
│   └── types.ts                   # TypeScript interfaces
├── GarmentOrderTracker.tsx        # Root tracker export
├── Header.tsx                     # Alternative site header
├── Hero/                # Homepage hero section
├── MegaMenu/            # Dropdown navigation system
│   ├── MegaMenu.tsx     # Implementation
│   └── index.ts         # Barrel export
├── ProcessSteps/        # Process visualization
└── TemplateCards/       # Template preview cards
```

## Key Components Explained

### AstraHeader

The main navigation header for the application with:
- Logo and branding
- Main navigation links
- Responsive mobile menu
- Call-to-action buttons

This component handles the top-level navigation and branding for the entire site and adapts to different screen sizes.

### MegaMenu

A sophisticated dropdown menu system that:
- Organizes templates into categories
- Provides rich dropdown interfaces for each category
- Displays visual previews where applicable
- Handles hover and touch interactions appropriately

It implements a comprehensive solution for navigating the large catalog of templates available in the application.

### Button

A versatile, reusable button component that:
- Supports different variants (primary, secondary, outline)
- Offers multiple sizes (sm, md, lg)
- Handles disabled states
- Uses Tailwind for consistent styling

This is an example of the component-based approach used throughout the application, ensuring UI consistency.

### GarmentOrderTracker

A specialized tool for tracking garment manufacturing orders through:
- Phase-based progress tracking
- Task management and status updates
- Detailed information viewing and editing
- Progress visualization

This complex feature demonstrates how the application implements specialized business functionality beyond basic content presentation.

#### GarmentOrderTracker Sub-components

- **PhaseTracker**: Visualizes production phases and progress
- **TaskList**: Displays tasks with completion status
- **TaskDetail**: Provides detailed view and editing for each task
- **TabNavigation**: Manages switching between summary and detailed views

## Application Flow

### Home Page

The home page (`/src/app/page.tsx`) acts as a landing page with:
1. A Hero section with main marketing message
2. Template card previews for popular categories
3. Process steps explaining how to use the platform
4. Features section highlighting key capabilities
5. Call-to-action section for conversion

### Template Navigation

The navigation flow for templates:
1. User interacts with the MegaMenu component
2. Categories and subcategories are displayed
3. Selection navigates to specific template views
4. Templates can be previewed before selection

### Garment Order Tracker

The order tracker workflow:
1. Access via the `/tracker` route
2. View order summary and phase information
3. Track progress through the manufacturing process
4. Select tasks to view or edit details
5. Update task status and completion information

## Technical Implementation Details

### Next.js App Router

The application leverages Next.js App Router for:
- File-based routing
- Nested layouts
- Client and server components
- Built-in SEO optimization

This modern architecture provides a clean separation of concerns and efficient rendering patterns.

### State Management

The application uses React's built-in state management with:
- `useState` hooks for component-level state
- Props for passing data between components
- Context for sharing state across component trees where needed

This approach keeps the application simple and maintainable without introducing additional libraries.

### CSS and Styling

Styling throughout the application is handled with:
- Tailwind CSS for utility-based styling
- BEM-like class naming for component-specific styles
- Responsive design using Tailwind's breakpoint utilities
- Consistent color patterns and spacing

### TypeScript Integration

TypeScript is used throughout for:
- Component props interfaces
- Data structure definitions
- Function parameter typing
- Return value typing

This provides excellent IDE support, catches errors early, and improves code maintainability.

## Best Practices Demonstrated

### Component Organization

- **Single Responsibility**: Each component focuses on a specific UI or functional element
- **Barrel Exports**: Index files simplify imports and component references
- **Interface Separation**: Type definitions kept distinct from implementation

### Responsive Design

- **Mobile-First**: Layouts built with small screens as the default
- **Breakpoint Consistency**: Follows Tailwind's breakpoint system
- **Accessible Interfaces**: Menus and navigation work with touch and mouse

### Performance Optimization

- **Component Splitting**: Keeps components small and focused
- **Lazy Loading**: Routes and components can be lazy-loaded
- **Typographic Optimization**: Uses Next.js optimized fonts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for creating an amazing framework
- Tailwind CSS for the utility-first approach to styling
- The open-source community for inspiration and shared knowledge
