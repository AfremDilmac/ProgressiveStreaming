const firebaseConfig = {
  apiKey: "AIzaSyCWf86SuAbS5Rus76MC9vLPsgLnh0Y8jcI",
  authDomain: "streame-2e066.firebaseapp.com",
  projectId: "streame-2e066",
  storageBucket: "streame-2e066.appspot.com",
  messagingSenderId: "226823067970",
  appId: "1:226823067970:web:5d90acd31c7c77da35d0db",
  measurementId: "G-DCBP6THP9P"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  const fireb = firebase.firestore()
  
  
  // function voor register
  function register() {
    // alle input fields
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let username = document.getElementById('username').value
    
    const falseUsername = document.getElementById('failUsername')
    const falseMail = document.getElementById('failMail')
    const falsePassword = document.getElementById('failPassword')
  
  
    if (username == "") {
      falseUsername.innerHTML = ('- Username is empty.')
    }
    else {
      falseUsername.innerHTML = ('')
    }
  
    if (validate_email(email) == false) {
      falseMail.innerHTML = ('- The email address is badly formatted.')
    }
    else {
      falseMail.innerHTML = ('')
    }
  
    if (validate_password(password) == false) {
      falsePassword.innerHTML = ('- The password must be 6 characters long or more.')
    }
    else {
      falsePassword.innerHTML = ('')
    }
    
  
    auth.createUserWithEmailAndPassword(email, password)
      .then(function () {
        fireb.collection('Users').doc(auth.currentUser.uid)
          .set({
            username: username,
            password: password,
            email: email,
            
        
          })
          .then(function () {
            register.innerHTML = ('User has been Created!!')
            
            location.href = "index.html"
          })
          .catch(function (error) {
            let error_message = error.message
            registeren.innerHTML = `${error_message}`
          })
      })
  }
  
  // function voor login
  function login() {
    const status = document.getElementById('status')
  
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
  
    if (validate_email(email) == false || validate_password(password) == false) {
      status.innerHTML = ('Email or Password is incorrect!')
      return
    }
  
    auth.signInWithEmailAndPassword(email, password)
      .then(function () {
        let user = auth.currentUser
        let database_ref = database.ref()
        let user_data = {
          last_login: Date.now()
        }
  
        // Push to Firebase Database
        database_ref.child('Users/' + user.uid).update(user_data)
        window.localStorage.setItem('uid', auth.currentUser.uid)
        window.localStorage.setItem('email', document.getElementById('email').value)
        window.localStorage.setItem('psw', document.getElementById('password').value)
        location.href = "game.html";
        console.log(auth.currentUser)
      })
      .catch(function (error) {
        let error_message = error.message
        status.innerHTML = `${error_message}`
      })
  }

  
  // Validate Functions
  function validate_email(email) {
    let expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      return true
    } else {
      return false
    }
  }
  
  function validate_password(password) {
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }