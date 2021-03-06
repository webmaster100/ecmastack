/* jshint node: true */
var fs = require('fs');

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ecmastack',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DB_URL,
      storageBucket: process.env.FIREBASE_BUCKET,
      messagingSenderId: process.env.FIREBASE_SENDER,
    }
  };
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    if (fs.existsSync('./env.js')) {
      const local = require('./env.js');
      ENV.firebase.apiKey = local.config.FIREBASE_API_KEY;
      ENV.firebase.authDomain = local.config.FIREBASE_AUTH_DOMAIN;
      ENV.firebase.databaseURL = local.config.FIREBASE_DB_URL;
      ENV.firebase.storageBucket = local.config.FIREBASE_BUCKET;
      ENV.firebase.messagingSenderId = local.config.FIREBASE_SENDER;
    }

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    console.log(ENV);
  }

  if (environment === 'production') {

  }



  return ENV;
};
