import { initializeApp} from 'firebase';

export const initFirebase = () => {

    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyALcEZ2_VwVTd00CzZPDUZB_gS4jww7OT4",
    authDomain: "netflix-9c20b.firebaseapp.com",
    databaseURL: "https://netflix-9c20b.firebaseio.com",
    projectId: "netflix-9c20b",
    storageBucket: "netflix-9c20b.appspot.com",
    messagingSenderId: "569120202139",
    appId: "1:569120202139:web:0d78e7c827b5477641953e"
  };
  // Initialize Firebase
  initializeApp(firebaseConfig);

}