import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contactme from './components/Contactme';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Contactme />
        <Footer />
      </div>
    );
  }
}
export default App;
