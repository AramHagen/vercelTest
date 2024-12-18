import { FirebaseOptions } from '@angular/fire/app';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'YOUR_PRODUCTION_FIREBASE_API_KEY',
    authDomain: 'YOUR_PRODUCTION_FIREBASE_AUTH_DOMAIN',
    projectId: 'YOUR_PRODUCTION_FIREBASE_PROJECT_ID',
    storageBucket: 'YOUR_PRODUCTION_FIREBASE_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_PRODUCTION_FIREBASE_MESSAGING_SENDER_ID',
    appId: 'YOUR_PRODUCTION_FIREBASE_APP_ID',
  } as FirebaseOptions // Explicitly cast the config to FirebaseOptions
};
