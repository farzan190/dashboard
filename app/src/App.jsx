import { useContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table"
import Progress from "./components/ProgressBar"
import Toolbar from "./components/Toolbar";
import Cart from "./Context/Context";
import SideNav from "./components/sideNav";
import Infobar from "./components/infobar";

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
    <span className="hosts">Projects</span>

  </div>
<Toolbar/>
<Table/>
</div>
</div>
</div>

</div>
}

export default App;
