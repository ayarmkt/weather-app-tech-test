# Weathermap Widget

## Overview

A weathermap widget to display weathers fetched from the [Netatmo Weathermap public API](https://dev.netatmo.com/apidocumentation/weather#getpublicdata).

## Tech Stack
Tech Stack: React | Create React App | MUI | npm <br>
API: [Netatmo Weathermap public API](https://dev.netatmo.com/apidocumentation/weather#getpublicdata).<br>

## Future Features rther Information About the Code

1. React Context and Firebase Authentication are used to manage the authentication. Upon login, the token and its expiration date are stored in localStorage and a logout timer is set. When the expiration time expires, the user is automatically logged out.
2. For basic form validation for Authentication, custom hook is used. While the form is invalid, the form cannot be submitted.
4. Redux and Firebase Realtime Database are used to manage and store the data.
5. Redux also manages the UI state (menus, modals, notifications). 
6. Custom components (h1 titles, buttons, cards) for cleaner, more readable code.

## Future Updates

- Sorting the list by name or priority

## Getting Started

1. Fork and then clone this repository
2. Install npm with `npm install`
3. Create a .env file based on .env.example. Start a project on Firebase and obtain your API key etc.
4. Run `npm start` to start the server in development
5. For deployment, follow the Firebase Hosting instruction.
