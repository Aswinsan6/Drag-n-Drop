import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyBIT0tlu40VFsCiHUy5YfQa-slqd1AWjn0",
    authDomain: "developer-login-f1765.firebaseapp.com",
    projectId: "developer-login-f1765",
    storageBucket: "developer-login-f1765.appspot.com",
    messagingSenderId: "177726446814",
    appId: "1:177726446814:web:ae8da22a51f95173aff64f"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;