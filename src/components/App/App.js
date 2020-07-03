import React from 'react';
import HeaderBlock from './HeaderBlock/HeaderBlock';
import Footer from './Footer/Footer';
import s from './App.module.scss';
import Header from "./HeaderBlock/Header/Header";
import Paragraph from "./HeaderBlock/Paragraph/Paragraph";

function App() {
    return (
        <div className={s.root}>
            <HeaderBlock>
                <Header>
                    PROVERBI DI NONNA LIDIA
                </Header>
                <Paragraph>
                    I proverbi della mia nonna in dialetto di San Gregorio
                </Paragraph>
            </HeaderBlock>
            <HeaderBlock hideBackground>
                <Header>
                    PROVERBI:
                </Header>
                <Paragraph>
                    I proverbi di nonna Lidia
                </Paragraph>
            </HeaderBlock>
            <Footer/>
        </div>
    );

}

export default App;
