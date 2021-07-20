import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import '../styles/App.scss';
import '../styles/NavBar.scss';
import { IconContext } from 'react-icons';
import * as FaIcons from "react-icons/fa/index";    
import ENG from '../assets/img/ENG.png';
import SPA from '../assets/img/SPA.png';


function NavBar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [sideBar, setSiderbar] = useState(false)
    const showSidebar = () => setSiderbar(!sideBar)

    return (
        <>
            {/**  <IconContext.Provider value={{color: '#fff'}}>
                <div className="navBar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <IoIcons.IoMdClose/>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/">
                                <span>
                                    <Trans i18nKey="menu.1">
                                        <p>Home</p>
                                    </Trans>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/aboutUs">
                                <span>
                                    <Trans i18nKey="menu.2">
                                        <p>About</p>
                                    </Trans>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/classes">
                                <span>
                                    <Trans i18nKey="menu.3">
                                        <p>Classes</p>
                                    </Trans>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/contact">
                                <span>
                                    <Trans i18nKey="menu.4">
                                        <p>Find Us</p>
                                    </Trans>
                                </span>
                            </Link>
                        </li>
                        <li>
                           <div className="languageMenu"> 
                               {/*<button type="button" onClick={() => changeLanguage('ESP')}>ESP</button>*/}
                               {/* <img src={SPA} onClick={() => changeLanguage('ESP')} style={{"pointer-events": "all"}}/>
                                {/*<button type="button" onClick={() => changeLanguage('ENG')}>ENG</button>*/}
                               {/* <img src={ENG} onClick={() => changeLanguage('ENG')} style={{"pointer-events": "all"}}/>
                            </div>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>*/}

            <div className="contenderMenu">
                <div className="language">
                    <img src={SPA} alt="Boton para lenguaje Español"/>
                    <img src={ENG} alt="Button for English Language"/>
                </div>
                <div  className="menuLinks">
                        <ul>
                            <li>GDPMX</li>
                            <li>NOSOTROS</li>
                            <li>CLASES</li>
                            <li>ENCÚENTRANOS</li>
                        </ul>
                </div>
                <div className="iconsSocials">
                    <ul>
                        <li>
                            <FaIcons.FaFacebookSquare/>
                        </li>
                        <li>
                            <FaIcons.FaInstagramSquare/>
                        </li>
                        <li>
                            <FaIcons.FaYoutube/>
                        </li>
                        <li>
                            <FaIcons.FaWhatsappSquare/>
                        </li>
                        <li>
                            <FaIcons.FaYoutube/>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default NavBar;

