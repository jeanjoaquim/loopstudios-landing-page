import BurgerMenu from '../images/icon-hamburger.svg';

function Header({ logo }) {
    return(
        <header>
            <div className="header-container">
                <img src={logo} alt='logo' />

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