## Setup Instructions

- **Install PostgreSQL Locally**

  - Download and install PostgreSQL from [PostgreSQL Official Website](https://www.postgresql.org/download/).
  - After installation, run the PostgreSQL service.

- **Install Redis Locally**

  - Download and install Redis from [Redis Official Website](https://redis.io/download/).
  - Once installed, run the Redis server.

- **In the Repository**

  - Install Dependencies:
    ```bash
    npm install
    ```
  - Create a `.env` file in the root of the repository with the following configuration:
    ```
    REDIS_HOST=localhost
    REDIS_PORT=6379
    POSTGRES_HOST=localhost
    POSTGRES_PORT=5432
    POSTGRES_USER=dummy_user
    POSTGRES_PASSWORD=dummy_password
    POSTGRES_DATABASE=dummy_database
    ```

- **Run the Application**
  - Start the application in development mode:
    ```bash
    npm run start:dev
    ```

The app should now be running locally at: http://localhost:3000.
