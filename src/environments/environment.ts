// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyAVX5WUVveuZiO9M7tzqsg9xj9zpajG6xQ",
    authDomain: "angular4authenticationapp.firebaseapp.com",
    databaseURL: "https://angular4authenticationapp.firebaseio.com",
    projectId: "angular4authenticationapp",
    storageBucket: "angular4authenticationapp.appspot.com",
    messagingSenderId: "449907520515"
  }
};
