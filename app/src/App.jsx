import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table"
import Progress from "./components/ProgressBar"

function App() {
 const[abc,setAbc]=useState(""); 
return <div>
<Navbar/>
<input type="text" placeholder="Search" value={abc} onChange={(e)=>setAbc(e.target.value)}/>
<Table/>

</div>
}

export default App;
