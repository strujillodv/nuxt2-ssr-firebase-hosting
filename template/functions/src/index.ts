import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://clasificadoszipa.firebaseio.com"
});

const { Nuxt } = require('nuxt-start');

const nuxtConfig = require('./nuxt.config.js');

const config = {
  ...nuxtConfig,
  dev: false,
  debug: true,
  buildDir: 'nuxt',
};
const nuxt = new Nuxt(config);

exports.ssrapp = functions.https.onRequest((req, res) => nuxt.render(req, res));