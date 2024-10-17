# mern-project

Steps to Deploy in Render

1. Add some "CODE" to index.js file in backend(express app)
2. run the command in front-end(react app) => npm run build
3. check once again in back-end(express) with command => npm start
4. go to "backend" -> 'package.json' and add this command based on folder structure.

   (for this project path) => project -> backend -> package.json

   "build": "npm install && npm install --prefix ../frontend && npm run build --prefix ../frontend"

   \*\*\* NOTE: for old project -> --legacy-peer-deps
   link: https://www.youtube.com/watch?v=aQ_2DMXSNwY

5. in RENDER project:

- name: 'mern-app'
- root dir: 'backend/'
- build command : npm run build
- start command: npm start

6. add the livepage link from render and add in cors in express app and react app (API_URL)
