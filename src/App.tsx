import React , {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import {BrowserRouter , Route} from 'react-router-dom';

function App() {

        const [name, setName] = useState('');


        useEffect( ()=>{
        (

            async () => {
                 const response = await fetch('http://localhost:8000/api/home',{
                    headers: {'Content-Type':'application/json'},
                    credentials:'include',
                });
                const content = await response.json();
                setName(content.name);

                }
            )();
        });

  // we need to set the user to the home component using: name={name}
  return (
    <div className="App">
        <BrowserRouter>
            <Nav name={name} setName ={setName}/> {/* after logout set the name, no need to refresh */}
            <main className="form-signin w-100 m-auto">
                <Route path='/' exact component ={() => <Home name={name}/>}/>
                <Route path='/login' component ={Login}/>
                <Route path='/register' component ={Register}/>

            </main>
        </BrowserRouter>

    </div>

  );
}

export default App;
