import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <header id="home">
        <nav id="nav-wrap">
        <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a class="mobile-btn" href="#  " title="Hide navigation">Hide navigation</a>
        <ul id="nav" class="nav">
            <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
            <li><a class="smoothscroll" href="#about">About</a></li>
            <li><a class="smoothscroll" href="#resume">Resume</a></li>
            <li><a class="smoothscroll" href="#portfolio">Portflio</a></li>
            <li><a class="smoothscroll" href="#contact">Contact</a></li>
        </ul> 
        </nav> 
        <div class="row banner">
        <div class="banner-text">
            <h3> <h2>Bingxi Du</h2> A <span>full stack developer</span>, strong at <span>backend</span> with years of experience of <span>SQL</span> and <span>NoSQL</span>.
            I have passion building performance web applications for clients.</h3>
            <h3><a class="smoothscroll" href="#about">Start scrolling </a>and learn more <a class="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul class="social">
                <li><a href="https://www.linkedin.com/in/bingxi-du-64350063/"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com/Heicyberg"><i class="fab fa-github"></i></a></li>
            </ul>
        </div>
        </div>
        <p class="scrolldown">
        <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
        </p>
      </header> 
      </React.Fragment>
    );
  }
}
  