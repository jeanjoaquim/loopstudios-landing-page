import { useState } from 'react';
import BurgerMenu from '../images/icon-hamburger.svg';
import CloseMenu from '../images/icon-close.svg';

function Header({ logo }) {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [changeIcon, setChangeIcon] = useState(BurgerMenu);

    const mobileNavigation = () => {
        if(toggleMenu === false) {
            setToggleMenu(true);
            setChangeIcon(CloseMenu);
        } else {
            setToggleMenu(false);
            setChangeIcon(BurgerMenu);
        }
    }

    return(
        <header>
            <div className="header-container">
                <img src={logo} alt='logo' />

                <div className="mobile-nav-menu">
                    <button onClick={() => mobileNavigation()} className="burger-menu-button">
                        <img src={changeIcon} alt='' />
                    </button>
                </div>

                <nav className={`mobile-menu `}>
                    <ul className='mobile-nav-list'>
                        <li className="mobile-nav-item title-t1">about</li>
                        <li className="mobile-nav-item title-t1">careers</li>
                        <li className="mobile-nav-item title-t1">events</li>
                        <li className="mobile-nav-item title-t1">products</li>
                        <li className="mobile-nav-item title-t1">support</li>
                    </ul>
                </nav>

                <nav className='desktop-nav-menu'>
                    <ul className='desktop-nav-list'>
                        <li className="desktop-nav-item">about</li>
                        <li className="desktop-nav-item">careers</li>
                        <li className="desktop-nav-item">events</li>
                        <li className="desktop-nav-item">products</li>
                        <li className="desktop-nav-item">support</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;