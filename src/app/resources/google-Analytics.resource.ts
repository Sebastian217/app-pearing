import * as firebase from 'firebase';

export class GoogleAnalytics {


    static initFirebase() {
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: 'AIzaSyD9f9nV1oGU4mf_xyVMEI658QaKAvZ2eAU',
            authDomain: 'app-pearing.firebaseapp.com',
            databaseURL: 'https://app-pearing.firebaseio.com',
            projectId: 'app-pearing',
            storageBucket: 'app-pearing.appspot.com',
            messagingSenderId: '841587202062',
            appId: '1:841587202062:web:7a403b9f225ff9ab07845f',
            measurementId: 'G-DGY0KCJP3H'
        };
        // Initialize Firebase
        return firebase.initializeApp(firebaseConfig);
    }

    static sendEventFirebase(eventName: string, category: string, actionGtm: string, label: string) {
        firebase.analytics().logEvent(eventName, {
            eventGtm: eventName,
            categoryGtm: category,
            actionGtm: actionGtm,
            labelGtm: label
        });
    }


}
