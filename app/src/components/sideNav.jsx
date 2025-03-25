import dashboard from "../assets/Dashboard.svg";
import environment from "../assets/Environments.svg";
import arrowdown from "../assets/arrowdown.svg";
import pointarrow from "../assets/pointarrow.svg";

import execution from "../assets/execution.svg";
import configuration from "../assets/configuration.svg";
import reports from "../assets/reports.svg";
import admin from "../assets/administration.svg";

const SideNav=()=>{
    return <nav>

        
<div className="row">  
     <img src={dashboard}/>
     <span>Dashboard</span>
     </div>

     <div className="row">  
     <img src={environment}/>
     <span>Environments</span>
     <img src={pointarrow} className="arrowdown"/>

     </div>
     
     <div className="row">  
     <img src={execution}/>
     <span>Executions</span>
     </div>
     
     <div className="row">  
     <img src={configuration}/>
     <span>Configuration</span>
     </div>
     
     <div className="row">  
     <img src={reports}/>
     <span className="report">Reports</span>
     </div>

     <div className="row">  
     <img src={admin}/>
     <span>Administration</span>
     <img src={pointarrow} className="arrowdown"/>

     </div>

    </nav>
}
export default SideNav;