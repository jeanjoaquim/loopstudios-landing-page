function Footer({ logo, facebook, twitter, pinterest, instagram }) {
    return(
        <footer>
            <div>
                <img src={logo} alt='' />
                <ul className="footer-list" >
                    <li>about</li>
                    <li>careers</li>
                    <li>events</li>
                    <li>products</li>
                    <li>support</li>
                </ul>
            </div>
            <div>
                <div className="socials">
                    <img src={facebook} alt='' />
                    <img src={twitter} alt='' />
                    <img src={pinterest} alt='' />
                    <img src={instagram} alt='' />
                </div>
                <p className="footer-rights">&#169; 2021 Loopstudios. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;