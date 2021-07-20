import React from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import '../styles/App.scss';
import '../styles/Home.scss';
import imgHome from '../assets/img/29.png';

function Home() {

    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="containerHome">
                <div className="imageHome">
                    <img src={imgHome} alt="for decoration"/>
                </div>
                <div className="textHome">
                    <h1>GUBA DOCE PARES MEXICO</h1>
                    <h3>A clan of authentic Filipino Eskrima-Kali-Arnis with direct lineage to the original Masters
                         and their old teachings.</h3>
                </div>
            </div>
        </>
    )
}

export default Home;