import HeroImage from '../images/mobile/image-hero.jpg';

function Hero() {
    return(
        <section className="hero-container" style={{backgroundImage:`url(${HeroImage})`}}>
            <h1 className='hero-text'>
                immersive experiences that deliver
            </h1>
        </section>
    )
}

export default Hero;