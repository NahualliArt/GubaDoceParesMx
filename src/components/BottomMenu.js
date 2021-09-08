/*import React, {useState} from 'react';*/
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation} from 'react-i18next';
import '../styles/App.scss';
import '../styles/BottomMenu.scss';
/*import { IconContext } from 'react-icons';*/
import * as FaIcons from "react-icons/fa/index"; 

import ENG from '../assets/img/ENG.png';



function BottomMenu() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return (
        <>
            <div className="navigationBar">
                <Link to="/" className="option" activeClassName="selected">
                    <div>   
                        <img src={ENG} alt="prueba" />
                        <p>GDPMX</p>
                    </div>
                </Link>

                <Link to="/aboutUs" className="option" activeClassName="selected">
                    <div>   
                        <img src={ENG} alt="prueba" />
                        <p>{t("menu.2")}</p>
                    </div>
                </Link>

                <Link to="/classes" className="option" activeClassName="selected">
                    <div>   
                        <img src={ENG} alt="prueba" />
                        <p>{t("menu.3")}</p>
                    </div>                            
                </Link>

                <Link to="/contact" className="option" activeClassName="selected">
                    <div>   
                        <img src={ENG} alt="prueba" />
                        <p>{t("menu.4")}</p>
                    </div>
                </Link>
        </div>
    </>
    )
}

export default BottomMenu;

