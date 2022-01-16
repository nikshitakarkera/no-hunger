var firebaseConfig = {
    apiKey: "AIzaSyBpFdAqXmhQ3-vJ2vge5uEqWvthlmoLZxw",
    authDomain: "no-hunger-52339.firebaseapp.com",
    projectId: "no-hunger-52339",
    storageBucket: "no-hunger-52339.appspot.com",
    messagingSenderId: "96189775612",
    appId: "1:96189775612:web:b56da7feae6ee9f4b02179",
    measurementId: "G-SX099GQC0T"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })