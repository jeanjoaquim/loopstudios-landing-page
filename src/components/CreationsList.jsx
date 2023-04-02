import DeepEarth from '../images/mobile/image-deep-earth.jpg';
import NightArcade from '../images/mobile/image-night-arcade.jpg';
import SoccerTeam from '../images/mobile/image-soccer-team.jpg';
import Grid from '../images/mobile/image-grid.jpg';
import FromAbove from '../images/mobile/image-from-above.jpg';
import PocketBorealis from '../images/mobile/image-pocket-borealis.jpg';
import Curiosity from '../images/mobile/image-curiosity.jpg';
import Fisheye from '../images/mobile/image-fisheye.jpg';

function CreationsList() {
    return(
        <ul className="creations-list">
            <li className="creations-item">
                <img src={DeepEarth} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>deep earth</span>
            </li>
            <li className="creations-item">
                <img src={NightArcade} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>night arcade</span>
            </li>
            <li className="creations-item">
                <img src={SoccerTeam} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>soccer team vr</span>
            </li>
            <li className="creations-item">
                <img src={Grid} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>the grid</span>
            </li>
            <li className="creations-item">
                <img src={FromAbove} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>from up above vr</span>
            </li>
            <li className="creations-item">
                <img src={PocketBorealis} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>pocket borealis</span>
            </li>
            <li className="creations-item">
                <img src={Curiosity} alt='' />
                <div className="gradient-background"></div>
                <span className='title-t2'>the curiosity</span>
            </li>
            <li className="creations-item">
                <img src={Fisheye} alt='' />
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