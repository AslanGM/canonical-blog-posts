# Project Title

Blog Posts

# Description

A project to recreate a design of three blog posts displayed in cards using the Vanilla framework, with data pulled dynamically from the WordPress API. The project is structured to reflect a clean and efficient codebase, making use of modern React practices and TypeScript for type safety. Although the task is straightforward, a custom development environment has been set up to ensure scalability and ease of maintenance for potential extensions.

## Tech Stack

-   React (TypeScript)
-   SCSS
-   Vanilla Framework
-   Canonical React Components
-   ESLint
-   Prettier

## Directory Structure

/src
-   /api
    -   /posts
-   /components
    -   /header
    -   /posts
    -   /blog-posts
-   /hooks
-   /styles
    -   /settings
    -   /tools
-   /utils

Most folder contains an `index.ts` file which consolidates exports for ease of import elsewhere in the project.
In the `styles` folder, I've organized `settings` and `tools` subfolders to include a breakpoint mixin and an SCSS function for easy rem calculations, prepping for a scalable app. I've also incorporated color and breakpoint variables from the Vanilla framework within these subfolders. Everything is bundled in `_bundle.scss` for simple use in SCSS modules. The `_index.scss` file is for global Vanilla framework styles.

I've utilized `babel-plugin-module-resolver` to streamline the import statements in the project. The paths are precisely defined in `config-override.js`, making the code cleaner and easier to manage.

## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all the necessary dependencies.
4. Now you can run any of the available scripts mentioned below.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
