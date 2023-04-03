import DeepEarth from '../images/mobile/image-deep-earth.jpg';
import NightArcade from '../images/mobile/image-night-arcade.jpg';
import SoccerTeam from '../images/mobile/image-soccer-team.jpg';
import Grid from '../images/mobile/image-grid.jpg';
import FromAbove from '../images/mobile/image-from-above.jpg';
import PocketBorealis from '../images/mobile/image-pocket-borealis.jpg';
import Curiosity from '../images/mobile/image-curiosity.jpg';
import Fisheye from '../images/mobile/image-fisheye.jpg';
import DesktopDeepEarth from '../images/desktop/image-deep-earth.jpg';
import DesktopNightArcade from '../images/desktop/image-night-arcade.jpg';
import DesktopSoccerTeam from '../images/desktop/image-soccer-team.jpg';
import DesktopGrid from '../images/desktop/image-grid.jpg';
import DesktopFromAbove from '../images/desktop/image-from-above.jpg';
import DesktopPocketBorealis from '../images/desktop/image-pocket-borealis.jpg';
import DesktopCuriosity from '../images/desktop/image-curiosity.jpg';
import DesktopFisheye from '../images/desktop/image-fisheye.jpg';

function CreationsList() {
    return(
        <ul className="creations-list">
            <h2 className='title-t1'>our creations</h2>
            <li className="creations-item">
                <img className='creations-mobile-photo' src={DeepEarth} alt='' />
                <img className='creations-desktop-photo' src={DesktopDeepEarth} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>deep earth</span>
            </li>
            <li className="creations-item">
                <img className='creations-mobile-photo' src={NightArcade} alt='' />
                <img className='creations-desktop-photo' src={DesktopNightArcade} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>night arcade</span>
            </li>
            <li className="creations-item">
                <img className='creations-mobile-photo' src={SoccerTeam} alt='' />
                <img className='creations-desktop-photo' src={DesktopSoccerTeam} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>soccer team vr</span>
            </li>
            <li className="creations-item">
                <img className='creations-mobile-photo' src={Grid} alt='' />
                <img className='creations-desktop-photo' src={DesktopGrid} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>the grid</span>
            </li>
            <li className="creations-item">
                <img className='creations-mobile-photo' src={FromAbove} alt='' />
                <img className='creations-desktop-photo' src={DesktopFromAbove} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>from up above vr</span>
            </li>
            <li className="creations-item">
                <img className='creations-mobile-photo' src={PocketBorealis} alt='' />
                <img className='creations-desktop-photo' src={DesktopPocketBorealis} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>pocket borealis</span>
            </li>
            <li className="creations-item">
                <img className='creations-mobile-photo' src={Curiosity} alt='' />
                <img className='creations-desktop-photo' src={DesktopCuriosity} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>the curiosity</span>
            </li>
            <li className="creations-item">
                <img className='creations-mobile-photo' src={Fisheye} alt='' />
                <img className='creations-desktop-photo' src={DesktopFisheye} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>make it fisheye</span>
            </li>
            <button className="btn-v1">
                see all
            </button>
        </ul>
    );
}

export default CreationsList;