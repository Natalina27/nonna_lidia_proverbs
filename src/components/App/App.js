import React from 'react';
import HeaderBlock from './Header/HeaderBlock';
import Footer from './Footer/Footer';
import s from './App.module.scss';

function App() {
    return (
        <div className={s.root}>
            <HeaderBlock
                title='PROVERBI DI NONNA LIDIA'
                desc='I proverbi della mia nonna in dialetto di San Gregorio'
            />
            <HeaderBlock
                title='PROVERBI:'
                hideBackground

            />
            <Footer/>
        </div>
    );

}

export default App;
