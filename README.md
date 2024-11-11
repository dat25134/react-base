# React Base Project

A modern React application template built with Create React App, featuring authentication, role-based authorization, and a clean architecture.

## Features

- 🔐 Authentication system with role-based access control
- 🎨 Tailwind CSS for styling
- 🔄 Redux Toolkit for state management
- 📱 Responsive design
- 🛣️ React Router for navigation
- 🔄 Loading states management
- 🌐 API integration ready

## Tech Stack

- React 18
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios
- Redux Persist

## Project Structure
src/
├── assets/ # Static assets and global styles
├── components/ # Reusable components
│ ├── common/ # Shared UI components
│ └── layout/ # Layout components
├── config/ # Configuration files
├── constants/ # Constants and enums
├── hooks/ # Custom React hooks
├── pages/ # Page components
├── routes/ # Routing configuration
├── services/ # API services
├── store/ # Redux store setup
└── utils/ # Utility functions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```
2. Install dependencies
```bash
npm install
```
3. Create environment file
```bash
cp .env.example .env
```
4. Start the development server
```bash
npm start
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Authentication

The project includes a complete authentication system with:

- Login/Logout functionality
- Role-based route protection
- Persistent authentication state
- Loading states during authentication

### Test Credentials

    Admin User:
    Email: admin@example.com
    Password: password
    Regular User:
    Email: user@example.com
    Password: password

## Components

### Common Components

1. Button
- Supports multiple variants (primary, secondary, danger, success)
- Configurable sizes
- Loading state support

2. Loading
- Fullscreen overlay option
- Multiple size variants
- Custom colors

3. ConfirmModal
- Reusable confirmation dialog
- Customizable messages and actions

### Layout Components

1. Layout
- Consistent page structure
- Responsive header and footer
- Content container with max-width

2. Header
- Responsive navigation
- Dynamic menu based on user roles
- Authentication status display

## State Management

Redux Toolkit is used for state management with the following slices:

1. Auth Slice
- User authentication state
- Role management
- Login/logout actions

2. Loading Slice
- Global loading state
- Support for multiple loading states

## Styling

The project uses a combination of:

- Tailwind CSS for utility-first styling
- CSS modules for component-specific styles
- Global styles for common elements

## Environment Variables

REACT_APP_API_URL=http://localhost:3000


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
