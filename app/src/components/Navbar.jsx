import notif from "../assets/notif.png";
import potrait from "../assets/potrait.png";
import alert from "../assets/alert.png";

const Navbar=()=>{
    return <header>
    <span>HASS</span>
    <input type="text" placeholder="Search"/>
    <div>
    <img src={notif}/>
    <img src={alert}/>
    <div className="user-menu">
     <span>John Doe</span>   
    <img src={potrait}/>
    </div>
    </div>

  </header>
}

export default Navbar;