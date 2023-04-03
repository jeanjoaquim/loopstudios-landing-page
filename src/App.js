import Logo from './images/logo.svg';
import FacebookLogo from './images/icon-facebook.svg';
import TwitterLogo from './images/icon-twitter.svg';
import PinterestLogo from './images/icon-pinterest.svg';
import InstagramLogo from './images/icon-instagram.svg';
import Header from './components/Header';
import Hero from './components/Hero';
import CreationsList from './components/CreationsList';
import Footer from './components/Footer';
import InteractiveVR from './images/mobile/image-interactive.jpg';
import './styles.css';

function App() {
    return(
        <div className='container'>
            <Header logo={Logo} />
            <Hero />
            <section className='text-block-container'>
                <img src={InteractiveVR} alt='' />
                <div className='text-block'>
                    <h2 className='title-t1'>the leader in interactive vr</h2>
                    <p className='text-t1'>
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        their brand.
                    </p>
                </div>
            </section>
            <section className='creations-container'>
                <CreationsList />
            </section>
            <Footer 
                logo={Logo} 
                facebook={FacebookLogo}
                twitter={TwitterLogo}
                pinterest={PinterestLogo}
                instagram={InstagramLogo}
            />
        </div>
    )
}

export default App;