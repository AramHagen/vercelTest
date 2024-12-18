import { FirebaseOptions } from '@angular/fire/app';

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: '',
        authDomain: '',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
        appId: '',
    } as FirebaseOptions // Explicitly cast the config to FirebaseOptions
};