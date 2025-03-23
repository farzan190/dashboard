
import data from "../utils/data.json";
import ProgressBar from "../components/ProgressBar";
const Table = () => (
<div>  <table>
    <thead>
      <tr>
        <th>Execution ID</th>
        <th>Host Name</th>
        <th>Execution Name</th>
        <th>Start Date</th>
        <th>Execution State</th>
        <th>Type</th>
        <th>Executed By</th>
        <th>Logs</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.executionId}>
          <td>{item.executionId}</td>
          <td>{item.hostName}</td>
          <td>{item.executionName}</td>
          <td>{new Date(item.startDate).toLocaleString()}</td>
          <td>{<ProgressBar percent={item.executionState.percentage} />}{item.executionState.percentage}</td>
          <td>{item.executionState.type}</td>
          <td>{item.executedBy}</td>
        </tr>
      ))}
    </tbody>
    
  </table>
  
  </div>
);

export default Table;
