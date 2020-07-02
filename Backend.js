import firebase from 'firebase';

class Backend {

    constructor(){
        this.init();
    }

    init() {
        if (!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyCtFNjDMynzOgeanQOkAb_eMABE7hzGqeA",
                authDomain: "funchat-bebd.firebaseapp.com",
                databaseURL: "https://funchat-bebd.firebaseio.com",
                projectId: "funchat-bebd",
                storageBucket: "funchat-bebd.appspot.com",
                messagingSenderId: "911872909449",
                appId: "1:911872909449:web:68086aaeb2c837dc96e658",
                measurementId: "G-70WKTH6KPC"
            });
        }
    }

    db() {
        return firebase.database();
    }

}

export default new Backend();