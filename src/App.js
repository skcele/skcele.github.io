import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h1 className="navbar-text"><a href=".">stephanie k cree</a></h1>
        <nav>
          <ul className="navbar-list">
            <li className="navbar-text"><a href=".">design</a></li>
            <li className="navbar-text"><a href=".">code</a></li>
            <li className="navbar-text"><a href=".">art</a></li>
            <li className="navbar-text"><a href=".">words</a></li>
            <li className="navbar-text"><a href=".">info</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="main-photo"></div>
      </main>
    </div>
  );
}

export default App;
