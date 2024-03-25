import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import {BrowserRouter , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Nav/>
            <main className="form-signin w-100 m-auto">
                <Route path='/' exact component ={Home}/>
                <Route path='/login' component ={Login}/>
                <Route path='/register' component ={Register}/>

            </main>
        </BrowserRouter>

    </div>

  );
}

export default App;
