import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  console.log(process.env.REACT_APP_USER)
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="App">
      <form>
        <label htmlFor='login'>login</label>
        <input type='text' name='login' onChange={(e) =>{
          setUser(e.target.value)
        }}></input>
        <label htmlFor='password'>password</label>
        <input type='text' name='password' onChange={(e) =>{
          setPassword(e.target.value)
        }}></input>
        <button onClick={(e) => {
          e.preventDefault()
          if(user === process.env.REACT_APP_USER && password === process.env.REACT_APP_PASSWORD){
            alert("logado")
          }
        }}>enviar</button>
      </form>
    </div>
  );
}

export default App;
