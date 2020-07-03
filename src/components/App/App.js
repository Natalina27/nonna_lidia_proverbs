import React from 'react';
import HeaderBlock from './HeaderBlock/HeaderBlock';
import Footer from './Footer/Footer';
import s from './App.module.scss';
import Header from "./HeaderBlock/Header/Header";
import Paragraph from "./HeaderBlock/Paragraph/Paragraph";

const proverbi = [
    {
        1: "LA VECCHIA NON SI VOLEA MURÌ PERCHÉ ANCORA SI TENEA IMPARA"
    },
    {
        2: "IMPARA L'ARTE E METTILA DA PARTE"
    },
    {
        3: "LA PAROLA È D'ARGENTO , MA IL SILENZIO È D'ORO"
    },
    {
        4: "A BOCCA CHIUSA NON CI ENTRA MOSCA"
    }
];

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
                    "CHI A FATTO I PROVERBI HA FATTO PRIMA L'ESPERIENZA"
                </Paragraph>
            </HeaderBlock>
            <Footer/>
        </div>
    );

}

export default App;
