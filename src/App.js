import React from 'react';
import './App.css';
import Footer from './componentes/footer';
import Navbar from './componentes/navbar';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store/index';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar/>
        <Routes/>
        <Footer/>
      </Provider>
      
    </div>
  );
}

export default App;
