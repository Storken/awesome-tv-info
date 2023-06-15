## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## If there was more time 

### Testing

I would have liked to test the contexts behaviour during requests, we have the properties `slow` and `noResponse` which both respond to how a request behaves.
The tests are set up with [Mock Service Worker](https://mswjs.io) and should suffice to be used for testing these parts as well.

### Features

There's a lot of data in the API which can be visualised, but doing so on the `/details` page simply takes a bunch of time since I would like to do it in a clean and good looking manner. 

# awesome-tv-info
