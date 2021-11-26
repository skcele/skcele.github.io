import React from 'react';
import './styles/App.css';
// import Palm from "./photos/palms.png";

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
        <div className="main-photo">
          <div className="main-photo_description">
            <h3>Stephanie K Cree is a UX Engineer by day and storyteller by night.
            <br/>
            <br/>
            I solve problems with design and code.<br/>
            I tell stories with words and multimedia art.
            </h3>
          </div>
        </div>
        <div className="main-section">
          <h3>I am currently a Front-End Developer and Designer at IBM, where I work on prototyping fantastic user experiences, facilitating collaboration, and integrating motion across products.</h3>
        </div>
      </main>
    </div>
  );
}

export default App;
