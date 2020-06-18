This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Deployment

This website is deployed through Netlify in [https://dsantiagomj.dev](dsantiagomj.dev).

## ENV File

This project has 3 env variables. When cloned, the project will contain an env.example file with the variables, for security reasons they have default values, this won't prevent the project to launch, but will limit it's
functionallity, although you can assign your own values to the variables in order to the project fully works.

- **REACT_APP_BASE_URL**: localhost:3000 by default, you can replace it with your custom domain URL.

- **REACT_APP_REQUEST_URL**: this project uses [https://getform.io/](getform) as endpoint for the contact page, you can create your own endpoint and set it in this variable or use another service.

- **REACT_APP_RESUME_URL**: Link to your CV.
