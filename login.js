

var firebaseConfig = {
  apiKey: "AIzaSyDPTG5iWPu6vYViTipWue07n5c7Z7_keps",
  authDomain: "zero-hunger-78b52.firebaseapp.com",
  projectId: "zero-hunger-78b52",
  storageBucket: "zero-hunger-78b52.appspot.com",
  messagingSenderId: "895115731977",
  appId: "1:895115731977:web:debe093bf71b393adf04d8",
  measurementId: "G-94N538CFKT"
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
