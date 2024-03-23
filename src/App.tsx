import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="form-signin w-100 m-auto">
        <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />

            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />

            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
        </main>
    </div>
  );
}

export default App;
