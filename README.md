
# VoscoAuth0 Project

## Overview

Vosco is a fullstack application featuring a React frontend and a Node.js backend. This guide provides step-by-step setup instructions, including Auth0 configuration.

## Project Structure

```
/vosco
├── /routes             # API routes
├── /client             # React frontend source code
│   ├── /public
│   └── /src
├── app.js              # Node.js backend entry point
├── package.json        # Node.js dependencies
└── .gitignore
```

## Setup Instructions




### 2. Frontend Setup (React)

1. **Navigate to the Client Folder**

   ```bash
   cd client
   ```

2. **Create a `.env` file in the project root with the following content (replace placeholder values with your actual configuration):**

   ```bash
      REACT_APP_domain=auth-0-domain
   REACT_APP_clientId=auth-0-clientId
   ```


### 3. Backend Setup (Node.js)

1. **Install Dependencies**

   From the project root, run:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**

   Create a `.env` file in the project root with the following content (replace placeholder values with your actual configuration):
   ```env
   PORT=4000
   AUTH0_DOMAIN=your-auth0-domain
   AUTH0_CLIENT_ID=your-auth0-client-id
   AUTH0_CLIENT_SECRET=your-auth0-client-secret
   ```

3. **Start the Backend Server**

   Run the server using:
   ```bash
   npm start
   ```
   The backend server will run on: **http://localhost:3000**




### 5. Auth0 Configuration

1. Log in to your [Auth0 Dashboard](https://auth0.com/).
2. Create a new application and choose **Single Page Application**.
3. Set the following in your application settings:
   - **Allowed Callback URLs:** `http://localhost:3000`
   - **Allowed Logout URLs:** `http://localhost:3000`
   - **Allowed Web Origins:** `http://localhost:3000`


## API Endpoints

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| POST    | /auth/callback     | Auth0 callback handler  |
| POST   | /AUTH0_URL         | Validate token       |


