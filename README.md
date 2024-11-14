# GraphQL Server

## Overview

This server is built with Node.js and Express, using Apollo Server to handle GraphQL queries and mutations. It serves as the backend for the application, providing APIs to fetch and manipulate data for users, books, and movies.

## Technologies Used

- Node.js
- Express
- Apollo Server
- GraphQL
- Babel (for ES6+ support)
- Nodemon (for development)

## Setup Instructions

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   ```

2. Navigate to the server directory:
  ``` bash
      cd server
  ```
3. Install the dependencies:
     ```
      npm install
        
      yarn install
     ```
4. Running the Server
     To start the server in development mode:
   ```
   npm start
    yarn start
   ```
   This will start the server on http://localhost:4000 and will automatically reload on changes.

GraphQL API Endpoints
You can access the GraphQL Playground at:
```
http://localhost:4000/graphql
```

