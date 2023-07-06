import { useState } from "react";
import style from "../search/searchBar.module.css"

export default function SearchBar({onSearch}) {
   const [id,setId]=useState("");

   const handleChange=(event)=>{
      setId(event.target.value)
     
      
   }

   return (
      <div>
          <input type='search' value={id} onChange={handleChange}  />
         <button className={style.buttonSearch} onClick={()=>onSearch(id)}>Search</button> 
      </div>
   );
}
