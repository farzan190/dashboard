import { useContext } from "react";
import data from "../utils/data.json";
import ProgressBar from "../components/ProgressBar";
import Pagedown from "../assets/PageDown.png";
import View from "../assets/View.png";
import Cart from "../Context/Context";

const Table = () => {
    const {Tabledata,setTableData}=useContext(Cart);
    const colors = ["#29CF57", "#E1C844", "#EE5B5B"];
 
 
 return (
<div>  
  
  <table>
    <thead>
      <tr>
        <th>Execution ID</th>
        <th>Host Name</th>
        <th>IP</th>
        <th>Execution Name</th>
        <th>Start Date</th>
        <th>Execution State</th>
        <th>Type</th>
        <th>Executed By</th>
        <th>Logs</th>
        
      </tr>
    </thead>
    <tbody>
      {Tabledata.map((item,index) => (
        <tr key={item.executionId}>
          <td><div className="executionId">{item.executionId}</div></td>
          <td>{item.hostName}</td>
          <td>{item.hostIp}</td>
          <td>{item.executionName}</td>
          <td>{new Date(item.startDate).toLocaleString()}</td>
          <td><div className="progressPercent">{<ProgressBar percent={item.executionState.percentage}  backgroundColor={colors[index % 3]}  />}{item.executionState.percentage}%</div></td>
          <td>{item.executionState.type}</td>
          <td><div className="executedBy">{item.executedBy}</div></td>
          <td>{<img src={View}/>}{<img src={Pagedown}/>}</td>

        </tr>
      ))}
    </tbody>
    
  </table>
  
  </div>
);
}
export default Table;
