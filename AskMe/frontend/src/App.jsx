import React from 'react';
import AskQuestion from "./AskQuestion";
import LoginPage from './LoginPage';
import HomePage from './homepage';

function App() {
  return (
    <>
      <h1>Welcome to AskMe!</h1>
      <HomePage/>
      <LoginPage/>
      <AskQuestion />
      
      
    </>
  );
}

export default App;