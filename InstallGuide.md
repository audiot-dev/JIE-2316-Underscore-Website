# Installation Guide

## Local Setup

1. Install [NodeJS](https://nodejs.org/en/download). Version 18.x is preferred, as that is the version used for production builds, but development has also been done in version 16.x without issue.

2. Install project dependencies. When in the root directory, run `npm install`. This will install all dependencies found in the `package.json`.

## Running the Project Locally

This project contains a few environment variables. They can be found in the document "AudioT Local Environment Variables" in the AudioT Development Google Drive (audiot.development@gmail.com). These variables should be copied into a `.env.local` file. Please, make sure this file is gitignored as they should never be visible on GitHub.

To run the project on `localhost:3000` for development, run `npm run dev` while in the root directory. Note that NextJS has a "hot refresh" so any code changes made while the server is running will be reflected immediatly (no need to restart the server).

To test a production build locally, run `npm run build`. Pages can then be browsed locally as they would in a production environment, which can be usefull in certain cases. Note that there will be no "hot refresh".

## Vercel Access

[Vercel](https://vercel.com/) is our web hosting provider. To login with Vercel, choose to login with email and enter the AudioT Development gmail (audiot.development@gmail.com). You will be sent an email verifying the login. After verifying, you should be able to enter the dashboard which will have one project, the website. 

From Vercel, you can change production environment variables, deployment domains, and much more. 

Note that any changes made to the GitHub repo's main branch will automatically be deployed into production. Any changes made to a different branch on the GitHub repo will be deployed to a different URL, allowing you to preview the change in production. 

## Database Access

This project uses a [FaunaDB](https://dashboard.fauna.com/) database. The email and password for signing in are the same as the AudioT Development gmail account.

Note that there are two databases in this account, AudioT and AudioT_development. It is reccomended to use the development database during development and the non-development database for production. The database to use is specified by the `FAUNA_SECRET_KEY` environment variable.

## ReCAPTCHA Access
Information about the ReCAPTCHA service provided by Google which we used, can be found on the [Google Cloud Console](https://console.cloud.google.com/security/recaptcha?project=audiot-383202). Note that the key currently used on the website is v2, not v3.

## Admin Page Access
The admin page is found [here](https://audiot.vercel.app/admin). The username is AudioT_Root and the password is the same as the AudioT Development gmail.