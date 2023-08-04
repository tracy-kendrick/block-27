// import { useState } from 'react'

import './App.css'

import Authenticate from './components/Authenitcate';
import SignUpForm from './components/SignUpForm';

export default function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  console.log("trying")
  return (
    <>
    
      <Authenticate />
      <SignUpForm />
    </>
  );
}

