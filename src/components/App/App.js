import React from 'react';
import './App.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import s from './App.module.css';

function App() {
    return (
        <div className={s.root}>
            <Header/>
            <Footer/>
        </div>
    );

}

export default App;
