import { useState } from "react";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Form from "./Form";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  const [items,setItems]=useState(initialItems)
  
  function handleAddItems(item){
    setItems((items)=>[...items,item])
  }
  function handleDeleteItem(id){
    setItems((items)=>items.filter((item)=>item.id!==id))
  }
  function handleToggleItem(id){
    setItems((items)=>items.map(item=>item.id===id?{...item,packed:!item.packed}:item))
  }
  function handleClearList(){
    const confirmed=window.confirm(`Are you sure you want to remove ${items.length} items?`)
    if(confirmed) setItems((items)=>[])
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} OnClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  );
}
export default App;
