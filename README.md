# Task Dashboard

A React + TypeScript task management dashboard built with Material-UI components.

## 🚀 Features

- Display tasks with different statuses (PENDING, IN_PROGRESS, COMPLETED)
- Advance task status with dependency validation
- Highlight tasks ready to start
- Add new tasks via form
- Persist data in localStorage
- Responsive Material-UI design

## 🛠 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Material-UI (MUI)** - Component library with theming
- **Vite** - Build tool and dev server
- **Vitest + React Testing Library** - Testing framework

## 🛠 Getting Started

### Clone Repository

```bash
git clone https://github.com/matchmakers69/lumin-task-dashboard.git
cd lumin-task-dashboard
```

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm start
# or
npm run dev

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Requirements Fulfilled

### Core Requirements

- ✅ Display tasks with name, status, and dependencies
- ✅ Status advancement with dependency validation
- ✅ Highlight ready-to-start tasks
- ✅ Proper TypeScript implementation
- ✅ Material-UI components and styling

### Bonus Features

- ✅ Add new tasks form
- ✅ localStorage persistence
- ✅ Responsive design
- ✅ Proper error handling
- ✅ Loading states simulation

## 🏗 Architecture & Design Decisions

### Key Design Choices

1. **Custom Hook Pattern**: Implemented `useTasks` hook to centralize task logic and state management
2. **MUI Theming**: Created a custom theme with proper color palette and component variants
3. **Simulated Async Operations**: Added loading states to mimic real API calls
4. **Dependency Validation**: Implemented robust logic to prevent invalid status transitions
5. **Responsive Design**: Used MUI's Grid system and breakpoints for mobile-first approach

## ⏱ Development Notes

**Time Investment**: This project took more than the suggested 1 hour, primarily because I wanted to demonstrate:

- Proper MUI theming and component customization
- Real-world patterns like async data simulation
- Comprehensive testing of core functionalities
- Professional code organization

Instead of using static mock data, I implemented a pattern that simulates real data fetching with loading states, which better represents production applications.

## 🚀 Future Improvements

- **State Management**: Implement Redux Toolkit or Context API for complex state scenarios
- **Form Handling**: Integrate react-hook-form for better form validation and UX
- **Code Organization**: Further separate concerns with feature-based folder structure
- **API Integration**: Replace localStorage with actual backend API
- **Advanced Testing**: Add E2E tests with Cypress or Playwright
- **Performance**: Implement virtualization for large task lists
- **Accessibility**: Enhance ARIA labels and keyboard navigation

## 🧪 Testing

The project includes unit tests for core functionality:

```bash
npm test
```
