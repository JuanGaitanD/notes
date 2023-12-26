const firebaseConfig = {
    apiKey: "AIzaSyAyiAOH4kv_BeomvOAWi1rRtSzKNu6moEw",
    authDomain: "notes-94160.firebaseapp.com",
    projectId: "notes-94160",
    storageBucket: "notes-94160.appspot.com",
    messagingSenderId: "495943047762",
    appId: "1:495943047762:web:8aff0450fb7a3254465d8b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const db = firebase.firestore();

// Initialize authentication
const auth = firebase.auth();