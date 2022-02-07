
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

console.log("Testing");

const firebaseConfig = 
{
  apiKey: "AIzaSyDPTG5iWPu6vYViTipWue07n5c7Z7_keps",
  authDomain: "zero-hunger-78b52.firebaseapp.com",
  databaseURL: "https://zero-hunger-78b52-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storajgeBucket: "gs://zero-hunger-78b52.appspot.com"
};
const app = initializeApp(firebaseConfig);
//var userId= "IihriSoeUFXFFsCWEyauqvsOekv2"
//var name_rest="Nikshita";
//var contact=9878987876;
//var email="karkera@gmail.com";
//var plates=5;
const database = getDatabase(app);

import {ref, set } from "firebase/database";

function writeUserData(userId, name_rest, email, contact,plates) 
{
  console.log("Enter")
  const db = getDatabase();
  console.log(db)
  set(ref(db, 'zero hunger/restaurants/' + userId), {
    username: name_rest,
    email: email,
    contact: contact,
    plates:plates
  }).then(() => {
    console.log('Data saved successfully!')
  })
  .catch((error) => {
    console.log('The write failed...')
  });

  
  console.log('set done')
}
console.log("Running function...")
writeUserData(userId, name_rest, email,contact, plates)
