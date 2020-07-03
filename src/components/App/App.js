import React from 'react';
import HeaderBlock from './HeaderBlock/HeaderBlock';
import Footer from './Footer/Footer';
import s from './App.module.scss';
import Header from "./HeaderBlock/Header/Header";
import Paragraph from "./HeaderBlock/Paragraph/Paragraph";
import Card from "./Card/Card";

const proverbs = [
    {
        prov: "LA VECCHIA NON SI VOLEA MURÌ PERCHÉ ANCORA SI TENE A IMPARA",
        name: "Sophie"
    },
    {
        prov: "IMPARA L'ARTE E METTILA DA PARTE",
        name: "Natalya"
    },
    {
        prov: "LA PAROLA È D'ARGENTO , MA IL SILENZIO È D'ORO",
        name: "Lidia"
    },
    {
        prov: "A BOCCA CHIUSA NON CI ENTRA MOSCA",
        name: "Rodica"
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
            <div>
                {
                    proverbs.map(({prov,name}) => <Card prov={prov} name={name} />)
                }
            </div>
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
