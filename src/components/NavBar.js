/*import React, {useState} from 'react';*/
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation} from 'react-i18next';
import '../styles/App.scss';
import '../styles/NavBar.scss';
/*import { IconContext } from 'react-icons';*/
import * as FaIcons from "react-icons/fa/index";    
import ENG from '../assets/img/ENG.png';
import SPA from '../assets/img/SPA.png';


function NavBar() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    /**const [sideBar, setSiderbar] = useState(false)
    const showSidebar = () => setSiderbar(!sideBar)**/

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
                    <img src={SPA} onClick={() => changeLanguage('ESP')} style={{'pointer-events': "all"}} alt="Boton para lenguaje Español"/>
                    <img src={ENG} onClick={() => changeLanguage('ENG')} style={{'pointer-events': "all"}} alt="Button for English Language"/>
                </div>
                <div  className="menuLinks">
                        <ul>
                            <Link to="/" className="linksMenu"><li>GDPMX</li></Link>
                            <Link to="/aboutUs" className="linksMenu"><li>{t("menu.2")}</li></Link>
                            <Link to="/classes" className="linksMenu"><li>{t("menu.3")}</li></Link>
                            <Link to="/contact" className="linksMenu"><li>{t("menu.4")}</li></Link>
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

