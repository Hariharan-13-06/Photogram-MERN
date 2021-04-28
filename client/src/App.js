import React,{ useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Posts from './components/Post/Posts';
import Upload from './components/Upload/Upload';
import { useDispatch } from 'react-redux';
import { fire } from './firebase';

import { getPosts } from './actions/posts';

import './App.css';
import Login from './components/Login/Login';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [user, setUser] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire.auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case 'auth/invalid-email':
        case 'auth/user-disabled':
        case 'auth/user-not-found':
            setEmailError(err.message);
            break;
        case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
      }
    });
  }

  const handleSignup = () => {
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case 'auth/email-already-in-use':
        case 'auth/invalid-email':
            setEmailError(err.message);
            break;
        case 'auth/weak-password':
            setPasswordError(err.message);
            break;
      }
    });
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if(user)
      {
        clearInputs();
        setUser(user);
      }
      else  
        setUser('');
    });
  }

  useEffect(() => {
    authListener();    
  }, []);

  return (
      <div>
        {
          user ? (
            <>
              <Header handleLogout={handleLogout}  userName={userName}/>
              <div className="flex lg:flex-row flex-col-reverse justify-center">
                <Posts setCurrentId={setCurrentId} userName={userName}/>
                <Upload userName={userName} currentId={currentId} setCurrentId={setCurrentId}/>
              </div>
            </>
          ): (
            <Login 
              userName={userName}
              setUserName={setUserName}
              email={email} 
              setEmail={setEmail} 
              password={password} 
              setPassword={setPassword} 
              handleLogin={handleLogin} 
              handleSignup={handleSignup} 
              hasAccount={hasAccount} 
              setHasAccount={setHasAccount} 
              emailError={emailError} 
              passwordError={passwordError}
            />
          )
        }
        
      </div>
  );
}

export default App;
