import { createContext, useState } from "react";
import data from "../utils/data.json";



const Cart=createContext();

 export const ContextProvider=({children})=>{
  
   const [Tabledata,setTableData]=useState(data);

    return (<Cart.Provider value={{Tabledata,setTableData}} >
       {children} 
    </Cart.Provider>)
}


export default Cart;