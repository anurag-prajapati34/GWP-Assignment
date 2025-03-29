# User Management App

A modern React application built with Tailwind CSS, integrating the Reqres API for user authentication and management. 

## Features

- **Authentication:** Secure login using the Reqres API.
- **User Listing:** Paginated list of users with avatars and details.
- **CRUD Operations:** Create (mock), Read, Update, and Delete users.
- **Responsive UI:** Built with Tailwind CSS for seamless desktop and mobile experiences.
- **State Management:**React Context API ,  Local state updates for real-time user edits.

## Tech Stack

- **React**: Frontend library for building interactive UIs.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **Axios**: Promise-based HTTP client for API requests.
- **React Router**: Navigation and routing for a single-page app.
- **Reqres API**: Mock API for testing user management features.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or later)
- **npm** (v6 or later)

## Project Setup

Follow these steps to set up and run the project locally:

```bash
# Clone the repository
git clone https://github.com/anurag-prajapati34/GWP-Assignment.git

# Navigate to the project directory
cd GWP-Assignment

# Install dependencies
npm install

# Start the development server
npm start

src/
├── components/
│   ├── Login.js         # Login form with API authentication
│   ├── UserList.js      # Paginated user list with logout
│   ├── UserCard.js      # Individual user card with edit/delete
│   └── UserEdit.js      # Form for editing user details
├── App.js               # Main app with routing
├── index.js             # Entry point
└── index.css            # Tailwind CSS setup
