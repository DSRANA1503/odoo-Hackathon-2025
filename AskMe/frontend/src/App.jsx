import React from 'react';
import AskQuestion from "./AskQuestion";
import LoginPage from './LoginPage';
import HomePage from './homepage';
import Answer from './Answer';
import Registration from './Registration';

function App() {
  return (
    <>
      <h1>Welcome to AskMe!</h1>
      <Registration/>
      <Answer/>
      <HomePage/>
      <LoginPage/>
      <AskQuestion />
      
      
    </>
  );
}

export default App;