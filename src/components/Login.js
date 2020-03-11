import React, { useState } from 'react';
import './styles/login.css';
import Button from './Button';
import firebase from '../Firebase';
import db from '../Firebase';
//import MyApp from './PaypalButton';

function Login() {
    let title = `Ceri's App`
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [isUser, setIsUser] = useState(false)

    function handleClick(){
     console.log("handled click")

     var usersRef = db.collection("Users");

      usersRef.doc("SF").set({ name:'ceri', lastname:'goff' });

      console.log(db.collection('Users'))

        //if (!isUser) setIsUser(true)
    }

    function ordersForUser(){

      var usersRef = db.collection("Users").doc("SF");

      usersRef.get().then(function(doc) {
          if (doc.exists) {
              console.log("Document data:", doc.data());
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });

  }

  return (
    <div className='login-wrapper'>
        <h1>{title}</h1>
        <div style={{display: 'flex', alignItems:'center', flexDirection:'column'}}>
            <div className='login-input'>
            <input placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className='login-input' >
            <input placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <Button label="Login" onPress={ordersForUser()}/>
        </div>
    </div>
  );
}

export default Login;
