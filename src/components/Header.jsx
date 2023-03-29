import Logo from '../images/logo.svg';
import BurgerMenu from '../images/icon-hamburger.svg';

function Header() {
    return(
        <header>
            <div className="header-container">
                <img src={Logo} alt='logo' />

                <div className="mobile-nav-menu">
                    <button className="burger-menu-button">
                        <img src={BurgerMenu} alt='' />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;