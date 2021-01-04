import React from 'react';
import './App.css';
import Footer from './componentes/footer';
import Navbar from './componentes/navbar';
import Routes from './routes';



function App() {
  return (
    <div className="App">
     
        <Navbar/>
        <Routes/>
        <Footer/>
      
    </div>
  );
}

export default App;
