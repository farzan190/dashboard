import notif from "../assets/notif.png";
import potrait from "../assets/potrait.png";
import alert from "../assets/alert.png";
import search from "../assets/Search.svg";

const Navbar=()=>{
    return <header>
    <span className="Hass">HASS</span>
    <div className="dummysearch">
      <img src={search} className="searchIcon"/>
      <input type="text" placeholder="Search" className="dsearch"/>
      <div className="k">⌘K</div>
      </div>
    <div className="profileDetails">
    <img src={notif} className="notif"/>
    <img src={alert} className="alert"/>
    <div className="user-menu">
     <span>John Doe</span>   
    <img src={potrait}/>
    </div>
    </div>

  </header>
}

export default Navbar;