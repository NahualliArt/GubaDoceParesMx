/*import React, {useState} from 'react';*/
import React from 'react';
import { useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/App.scss';
import '../styles/TopMenu.scss';
/*import { IconContext } from 'react-icons';*/
import ENG from '../assets/img/ENG.png';
import SPA from '../assets/img/SPA.png';
import qrSocial from '../assets/menuIcons/qr_socials.png';



function TopMenu() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return (
        <>
            <div className="navigationTopBar">
                <div className="option">
                    <img src={SPA} onClick={() => changeLanguage('ESP')} style={{'pointer-events': "all"}} alt="Boton para lenguaje Español"/>
                </div>
                <div className="option">
                    <img src={ENG} onClick={() => changeLanguage('ENG')} style={{'pointer-events': "all"}} alt="Button for English Language"/>
                </div>
                <div className="option">
                    <a href="https://qrco.de/gdp_mx" className="optionTop" activeClassName="selected">
                        <img src={qrSocial} alt="Qr Code" />
                    </a>
                </div>
        </div>
    </>
    )
}

export default TopMenu;

