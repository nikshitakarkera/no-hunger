// Import the functions you need from the SDKs you need
import { initializeApp } from "./firebase/app";
import { getAnalytics } from "./firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1rGEZaWr0VFzp7R-_gUDuF5PRieOI8mQ",
  authDomain: "zerohunger-gdsc.firebaseapp.com",
  projectId: "zerohunger-gdsc",
  storageBucket: "zerohunger-gdsc.appspot.com",
  messagingSenderId: "675490867208",
  appId: "1:675490867208:web:1744781073f35d0bbe49bd",
  measurementId: "G-3XHGL5NE92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Reference messages collection
var EmailRef = firebase.database().ref('Emails');

// Listen for form submit
document.getElementById('ContactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var Email = getInputVal('Email');
  var Password = getInputVal('Password');



  // Save message
  saveEmail(Email, Password);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('ContactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveEmail(Email, Password){
  var newEmailRef = EmailRef.push();
  newEmailRef.set({
    Email: Email,
    Password: Password,

  });
}