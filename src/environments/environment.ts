// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: "http://localhost:3000/api/",
  gitBaseUrl:'https://api.github.com/users/',
  repoBaseUrl:"https://api.github.com/repos/",
  firebaseConfig : {
    apiKey: "AIzaSyBVF-0A_UWhVZQGHnKneDeozUwwYQ_HQo8",
    authDomain: "github-timeline-40053.firebaseapp.com",
    projectId: "github-timeline-40053",
    storageBucket: "github-timeline-40053.appspot.com",
    messagingSenderId: "249258951094",
    appId: "1:249258951094:web:f18db7b6a8a33609ac8117",
    measurementId: "G-0QT7E3SFMC"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
