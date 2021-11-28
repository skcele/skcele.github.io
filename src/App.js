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
          <h3>I am currently a Front-End Developer and Designer at IBM, where I work on prototyping fantastic user experiences, facilitating collaboration, and integrating motion across products.
          </h3>
            <div className="main-section_links">
              <h2 className="link-design"><a href=".">design</a></h2>
              <h2 className="link-code"><a href=".">code</a></h2>
              <h2 className="link-words"><a href=".">words</a></h2>
              <h2 className="link-art"><a href=".">art</a></h2>
              <h2 className="link-info"><a href=".">info</a></h2>
            </div> 
            <div className="main-section-square" />
        </div>
      </main>
    </div>
  );
}

export default App;
