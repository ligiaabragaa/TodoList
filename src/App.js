import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Card } from "./Card"
import { GetCard } from "./GetCard"

function App() {
  const [data, setData] = useState ([]);

  useEffect(()=>{

    function buscaDados() {
            fetch("http://localhost:3000/items")
            .then((response) => {
              if (response.ok) {
                return response.json();
            }
          })
          .then((data) => setData(data));
        } 
        buscaDados();

  },[] );

console.log(data);
 

  return (
    <div className="space">
      <h1>Todo List - Loja FuturoDev</h1>
      <div className="items">
       
        {
        data.map((item) => (

          <Card 
        label = {item.item}
        image_url = {item.image}
        price = {item.price} 
        id = {item.id}
        />

        ))}
      </div>
    </div>
  )
}

export default App