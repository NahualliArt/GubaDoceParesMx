/*import React, {useState} from 'react';*/
import React from 'react';
import { useTranslation} from 'react-i18next';
import '../styles/App.scss';
import '../styles/TopMenu.scss';
/*import { IconContext } from 'react-icons';*/
import ENG from '../assets/img/ENG.png';
import SPA from '../assets/img/SPA.png';



function TopMenu() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return (
        <>
            <div className="navigationBar">
                <div className="language">
                    <img src={SPA} onClick={() => changeLanguage('ESP')} style={{'pointer-events': "all"}} alt="Boton para lenguaje Español"/>
                    <img src={ENG} onClick={() => changeLanguage('ENG')} style={{'pointer-events': "all"}} alt="Button for English Language"/>
                </div>
        </div>
    </>
    )
}

export default TopMenu;

