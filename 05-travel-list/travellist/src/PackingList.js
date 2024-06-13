import { useState } from "react";
import Item from "./Item";
function PackingList({items,onDeleteItem,onToggleItem,OnClearList}) {
    const [sortBy,setSortBy]=useState("input")
  
    let sortedItems;
    if(sortBy==='input')sortedItems=items
    if(sortBy==='description')sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description))
    if(sortBy==='packed')sortedItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
    return (
      <div className="list">
        <ol >
          {sortedItems.map((item) => (
            <Item item={item} key={item.id}onDeleteItem={onDeleteItem}onToggleItem={onToggleItem}/>
          ))}
        </ol>
  
  
      <div className="actions">
          <select value={sortBy}onChange={e=>setSortBy(e.target.value)}>
          <option value="description">Sort By Description</option>
          <option value="input">Sort By Input Order</option>
          <option value="packed">Sort By Packed Status</option>
          </select>
      </div>
  
      <button onClick={OnClearList}>Clear List</button>
      </div>
    );
  }
  export default PackingList