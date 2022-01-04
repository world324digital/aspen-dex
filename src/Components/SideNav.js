import "../stylesheet/new-style.css";
import logo from '../images/white-logo-scaled.png';
import {NavLink} from 'react-router-dom';
import discord from '../images/social_icons/Discord_black.png';
import medium from '../images/social_icons/Medium_black.png';
import telegram from '../images/social_icons/Telegram_black.png';
import twitter from '../images/social_icons/Twitter_black.png';

function SideNav() {
    return (
        <header className="d-none d-md-flex">
        <div className="header">
            <a href="/">
                <img src={logo} alt="Logo"/>
            </a>
            {/* <NavLink to="">
                <img src={logo} alt="Logo"/>
            </NavLink> */}
            <h2 className="title">DCOLLECT</h2>
            <ul className="social-links">
                <li>
                    <a>
                        <img src={telegram} className="social-link"/>
                    </a>
                </li>
                <li>
                    <a>
                        <img src={medium} className="social-link"/>
                    </a>
                </li>
                <li>
                    <a>
                        <img src={twitter} className="social-link"/>
                    </a>
                </li>
                <li>
                    <a>
                        <img src={discord} className="social-link"/>
                    </a>
                </li>
            </ul>
        </div>
         
        
      </header>
    )
}

export default SideNav