# pr-lens-demo

A small orders service that exists so [PR Lens](https://github.com/coldteadotai/pr-lens) has something to draw. Open any pull request here and the bot comments with an animated architecture and data-flow diagram of the change.

## Running locally

Install dependencies with `npm install`, then start the service with `npm start`. The API listens on port 3000 by default; set `PORT` to change it. Orders are kept in memory, so restarting the process clears them.
