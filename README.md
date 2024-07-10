# varsity-web

This is the README file for the `varsity-web` project.

## Installation

To get started with the project, follow these steps:

1. Clone the repository.
2. Install the dependencies by running the following command:
  ```
  npm i -g pnpm 
  ```
  and:
  ```
  pnpm install
  ```

## Scripts

The following scripts are available:

- `pnpm dev`: Runs the development server using Vite.
- `pnpm build`: Builds the project for production.
- `pnpm preview`: Runs the project in preview mode using Vite.


## Configure App
To configure the app, you need to set the following environment variables:

### Environment Variables
VITE_API_URL: The API URL for the backend server.
BLOB_READ_WRITE_TOKEN: The vercel blob storage environment variable
VITE_CLERK_PUBLISHABLE_KEY: The clerk authentication publishable key

### Handling the database and Interfaces
To generate interfaces based on database scheme and generate a backup.sql run:
```
pnpm codegen dump
```

To update the server database based on the local schema run:
```
pnpm codegen restore
```

*Note: Some files are hidden by default. To show these files, navigate to `.vscode/settings.json` and comment out the file you want to show.*


