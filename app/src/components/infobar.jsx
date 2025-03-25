import arrowleft from "../assets/ArrowLeft.svg";
const Infobar=()=>{

    return <div className="reportarrow">
        <img src={arrowleft} className="arrowleft"/>
        <div className="headerinfo">
       <span className="reports">Reports</span>
       <div className="detail">view reports for hosts and projects scans</div>
       </div></div>
}

export default Infobar;