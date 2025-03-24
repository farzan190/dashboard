import { useState, useContext } from "react";
import Cart from "../Context/Context";
import Originaldata from "../utils/data.json";
import Fuse from "fuse.js";
import * as XLSX from "xlsx";
import filterIcon from "../assets/filterIcon.svg";
import Search from "../assets/Search.svg";
import exportImg from "../assets/export.svg";


const Toolbar = () => {
  const { Tabledata, setTableData } = useContext(Cart);
  const [searchQuery, setSearchQuery] = useState("");

  function filterDataByPeriod(data, period) {
    const now = new Date();
    now.setHours(23, 59, 59, 999); // Ensure accurate comparison

    return data.filter(item => {
      const startDate = new Date(item.startDate);
      if (period === "weekly") {
        const oneWeekAgo = new Date(now);
        oneWeekAgo.setDate(now.getDate() - 7);
        return startDate >= oneWeekAgo && startDate <= now;
      }
      if (period === "monthly") {
        const oneMonthAgo = new Date(now);
        oneMonthAgo.setMonth(now.getMonth() - 1);
        return startDate >= oneMonthAgo && startDate <= now;
      }
      if (period === "yearly") {
        const oneYearAgo = new Date(now);
        oneYearAgo.setFullYear(now.getFullYear() - 1);
        return startDate >= oneYearAgo && startDate <= now;
      }
      return false;
    });
  }

  const kardofilter = (period) => {
    const filteredData = filterDataByPeriod(Originaldata, period);
    setTableData(filteredData);
    setSearchQuery(""); 
  };

  const fuzzySearch = (query, data) => {
    if (!query.trim()) return data; // If empty, return all data
  
    const fuse = new Fuse(data, {
      keys: ["executionName", "executedBy", "startDate", "status"],
      threshold: query.length < 5 ? 0.3 : 0.1, // 🔥 Stricter match for longer queries
      shouldSort: true, // Sort better matches first
      includeScore: true, // Helps prioritize exact matches
    });
  
    return fuse.search(query).map(result => result.item);
  };
  

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query); 

    if (!query.trim()) {
      setTableData(Originaldata); 
      return;
    }

    const filteredData = fuzzySearch(query, Originaldata);
    setTableData(filteredData);
  };

  const sortByStartDate = () => {
    const sortedData = [...Tabledata].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    setTableData(sortedData);
  };


const exportToExcel = () => {
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(Tabledata), "Data");
  XLSX.writeFile(wb, "exported_data.xlsx");
};

<button onClick={exportToExcel}>Export</button>



  return (
  <div className="hostToolbar">
  
  <div className="toolbarhosts">Hosts</div>
    <div className="toolbar">
    <div className="duration">
  <div className="duration-container">
    <button className="duration-period" onClick={() => kardofilter("weekly")}>Weekly</button>
    <button className="duration-period" onClick={() => kardofilter("monthly")}>Monthly</button>
    <button className="duration-period" onClick={() => kardofilter("yearly")}>Yearly</button>
    <button className="duration-period">Custom</button>
  </div>
</div>

      <button className="filterButton">Filter <img src={filterIcon} /></button>
      <button onClick={sortByStartDate} className="filterButton">Sort <img src={filterIcon}/></button>
     
<div className="inputSearch">
      <img src={Search}/>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch} 
        className="tableSearch"
      />
</div>

      <button onClick={exportToExcel} className="export"><img src={exportImg}/>Export </button>
    </div>
    </div>
  );
};

export default Toolbar;
