import "../stylesheet/new-style.css";
import background from '../images/5InvitestoDiscord20AspenTokens.png';
import twitter from '../images/iconfinder_Circled_Twitter_svg_5279123.png';
import medium from '../images/iconfinder_Circled_Medium_svg5_5279113.png';
import discord from '../images/iconfinder_discord_4691356.png';
import SideNav from '../Components/SideNav';
import {NavLink} from 'react-router-dom';



function Home() {
  const divStyle = {
    backgroundImage: `url(${background})`
  };
  return (
    <section className="showcase">
      <SideNav/>

      <div style={divStyle}></div>
      
      <div className="overlay"></div>

      <div className="text">
          <h2>We are Currently in the Lab</h2>
          <h3>Join Our Discord for Pre-Launch Rewards</h3>
          {/* <a href="https://discord.gg/VSRRjJqFr4">Enter the Lab</a>  */}
          <NavLink to="/MarketPlace">Enter the Lab</NavLink>
      </div>

      <ul className="social">
        <li>
          <a target="_blank" href="https://discord.gg/VSRRjJqFr4">
            <img src={discord} alt/>
          </a>
        </li>
        
        <li>
          <a target="_blank" href="https://medium.com/@aspenlabs1">
            <img src={medium} alt/>
          </a>
        </li>
        
        <li>
          <a target="_blank" href="https://twitter.com/LabsAspen">
            <img src={twitter} alt className="img-fluid"/>
          </a>
        </li>
        
      </ul>
      
    </section>
  );
}

export default Home;
