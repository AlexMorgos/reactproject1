import React from 'react';
import './App.css';
import Joke from "./Joke"
import { directive } from '@babel/types';

function App() {
  return (
    <div>
      <Joke punchLine="text text text"/> 
      <Joke question="text text text" punchLine="text"/>
      <Joke question="text text" punchLine="text text"/>
      <Joke question="text text text text" punchLine="text text"/>
      <Joke question="text text" punchLine="text"/>
      <Joke question="text text text text text" punchLine="text text text"/>
    </div>
  )
}

export default App;
