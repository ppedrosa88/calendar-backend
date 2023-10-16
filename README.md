# Calendar Backend

**Calendar-backend** is an API developed using Node.js and MongoDB. Its primary purpose is to manage users and events related to those users, allowing interaction with this data in a database.

## Key Features

- **Users:** The API enables user creation, authentication, and user management. Each user has their own profile and can access personalized events.

- **Events:** Users can create, update, and delete events on their personal calendars. Each event can contain information such as date, time, description, and location.

- **Database:** The application uses MongoDB as a NoSQL database to securely store user and event information, with Mongoose as the ODM (Object Data Modeling) library for MongoDB.

- **Authentication:** User authentication is implemented using Bcrypt.js for password hashing and JSON Web Tokens (JWT) for secure user sessions.

- **Validation:** Input validation is handled with Express-validator to ensure data integrity.

- **Date and Time Management:** The Moment.js library is used for date and time handling, making it easy to work with event schedules.

- **Cross-Origin Resource Sharing (CORS):** CORS is implemented for secure cross-origin communication.

- **Environmental Variables:** The Dotenv library is used to manage environmental variables.

- **RESTful Interface:** It communicates with clients through a RESTful interface, making it easy to integrate with various applications and platforms.


## Technologies Used

- **Node.js:** The backend server is built in Node.js, enabling efficient and scalable execution.

- **MongoDB:** The NoSQL MongoDB database is used to flexibly and scalably store user and event data.

- **Express.js:** The API is built using the Express.js framework, making it easy to manage routes and controllers.

- **Bcrypt.js:** Bcrypt.js is used for secure password hashing and user authentication.

- **JSON Web Tokens (JWT):** JWTs are used for secure user sessions and authentication.

- **Express-validator:** Input validation is implemented using Express-validator to ensure data integrity.

- **Moment.js:** The Moment.js library is used for effective date and time handling.

- **CORS:** Cross-Origin Resource Sharing is implemented for secure cross-origin communication.

- **Dotenv:** The Dotenv library is used to manage environmental variables.

## Use Cases

- **Personal Calendar:** Users can use the API to manage their own personal calendars, scheduling and managing important events.

- **Third-Party Applications:** External developers can integrate the API into their applications to enable user and event management features.

- **Collaboration:** It allows collaboration in organizing events among registered users.

**Calendar-backend** provides a robust foundation for event and user management, making it easy to create applications and services related to calendar and event management. Its RESTful nature makes it highly versatile and suitable for various use cases.

# Installation Instructions for "10-calendar-backend"

To set up and install the "10-calendar-backend" project, follow these steps using the Node.js package manager (`npm`).

1. **Clone the Repository**:

   Make sure your project is in a local directory on your system. If you haven't cloned it from a Git repository, ensure you have all the necessary project files in a local folder.

2. **Run the `npm install` Command**:

   Open a terminal in your project's location and run the following command to install the dependencies listed in the `package.json` file:

   ```bash
   npm install

3. **Before Running the Project**:

   > [!IMPORTANT]
   > To make it work, you must configure the `.env` file with the database connection URL or even change the port used (4000 is used by default).

   Before running the project, please ensure you have configured the `.env` file with the necessary database connection URL, and you have the option to change the default port (4000) if needed.

4. **Run the Project**:

   You can use the scripts defined in the `package.json` file to run your project. The two main scripts defined are:

   - `npm run dev`: This uses `nodemon` to run your project in development mode. It will automatically restart the server whenever you make code changes.

   - `npm start`: This runs your project in production mode using `node`.

   To start your project in development mode, run:

   ```bash
   npm run dev

# API Endpoints Documentation

Below are the API endpoints along with their HTTP methods and corresponding routes for the "10-calendar-backend" application:

**Create User (POST):**
- Route: `localhost:4000/api/auth/new`
- HTTP Method: POST
- Description: This endpoint is used to create a new user in the application. User data should be sent in the request body in JSON format, including details such as username, password, email address, etc.

**Login (POST):**
- Route: `localhost:4000/api/auth`
- HTTP Method: POST
- Description: This endpoint allows users to authenticate in the application. Users should provide their credentials (username and password) in the request body in JSON format. If the credentials are correct, an authentication token is generated.

**Renew Token (GET):**
- Route: `localhost:4000/api/auth/renew`
- HTTP Method: GET
- Description: This endpoint is used to renew the authentication token. The user should send the current token in the authorization header of the request. If the token is valid, a new token is generated and returned to the user.

**Get Events (GET):**
- Route: `localhost:4000/api/events`
- HTTP Method: GET
- Description: This endpoint allows users to retrieve a list of events stored in the application. Authenticated users should include their authentication token in the authorization header to access this functionality.

**Create Event (POST):**
- Route: `localhost:4000/api/events`
- HTTP Method: POST
- Description: Users can use this endpoint to create a new event. They should provide event details in the request body in JSON format, including information such as date, time, description, and location of the event.

**Update Event (PUT):**
- Route: `localhost:4000/api/events/:id`
- HTTP Method: PUT
- Description: This endpoint allows users to update an existing event. They should provide the ID of the event they want to update in the URL and send the new event details in the request body in JSON format.

**Delete Event (DELETE):**
- Route: `localhost:4000/api/events/:id`
- HTTP Method: DELETE
- Description: Users can use this endpoint to delete a specific event. They should provide the ID of the event they want to delete in the URL of the request.

Please note that this documentation provides a basic description of the endpoints. In the actual implementation, it's important to include additional details about request parameters, expected responses, required authentication, and any necessary validation for each of the endpoints.