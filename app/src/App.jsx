import { useContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table"
import Progress from "./components/ProgressBar"
import Toolbar from "./components/Toolbar";
import Cart from "./Context/Context";
import SideNav from "./components/sideNav";
import Infobar from "./components/infobar";
import leftArrow from "../src/assets/leftarrow.svg";
import rightArrow from "../src/assets/rightarrow.svg";


function App() {
  const {Tabledata,setTableData}=useContext(Cart);
  
return <div>
<Navbar/>
 
<div className="page">
<div>
<SideNav/>
</div>
<div className="rightComponent">
  <Infobar/>
  <div className="right-page">
  <div className="info">
    <span className="hosts">Hosts</span>
    <span className="projects">Projects</span>

  </div>
<Toolbar/>
<Table/>
</div>
<div className="pagination">
 <div className="arrows"> <img src={leftArrow}/>
  <img src={rightArrow}/>
  </div>
  </div>
</div>

</div>

</div>
}

export default App;
