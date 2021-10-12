// Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyBjauV8NXpwszRhzNr-AW3aAKNRqs7A6UM",
    authDomain: "blogging-website-ede44.firebaseapp.com",
    projectId: "blogging-website-ede44",
    storageBucket: "blogging-website-ede44.appspot.com",
    messagingSenderId: "214556781549",
    appId: "1:214556781549:web:bbcc69d337df6ef62515e4"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  