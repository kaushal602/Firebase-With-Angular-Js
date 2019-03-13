// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  stripeKey: 'pk_test_U0MciLUU8a73yuwhh4VOUzMK',
  firebase: {
	  apiKey: "AIzaSyAveOH6FJNmOfawneIfeZXe3LJ5pKX-mwQ",
    authDomain: "workbudi-adverts.firebaseapp.com",
    databaseURL: "https://workbudi-adverts.firebaseio.com",
    projectId: "workbudi-adverts",
    storageBucket: "workbudi-adverts.appspot.com",
    messagingSenderId: "824980695375"
  },
  /*firebase2: {
    apiKey: "AIzaSyCOys3EpXQN5axhNz2G6bmz-sk5XLCfL_w",
    authDomain: "workbudi-252fa.firebaseapp.com",
    databaseURL: "https://workbudi-252fa.firebaseio.com",
    projectId: "workbudi-252fa",
    storageBucket: "",
    messagingSenderId: "251386973021"
  }*/
};
