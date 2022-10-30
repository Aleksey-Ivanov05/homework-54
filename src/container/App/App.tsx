import React, {useState} from 'react';
import './App.css';
import Deck from "../../components/Deck/Deck";
import Counter from "../../components/Counter/Counter";
import ResetButton from "../../components/ResetButton/ResetButton";

function App() {
  const createItems = () => {
    const items = [];
    for (let i = 0; i < 36; i++) {
      const newItem = {
        id: String(Math.floor(Math.random()*1000000)),
        hasItem: false,
        clicked: false,
      }
      items.push(newItem);
    }
    const randomIndex = Math.floor(Math.random() * items.length);
    items[randomIndex].hasItem = true;
    return items;
  }

  const [items, setItems] = useState(createItems());


  const colorChange = (id: string) => {
    const index = items.findIndex(p => p.id === id);
    const itemsCopy = [...items];
    const itemCopy = {...items[index]};
    itemCopy.clicked = true;
    itemsCopy[index] = itemCopy;
    setItems(itemsCopy);
  }

  const resetDeck = () => {
    let itemsCopy = [...items];
    itemsCopy = createItems();
    setItems(itemsCopy);
  }



  let itemList: React.ReactNode = null;

  if (items) {
    itemList = (<Deck items={items} colorChange={colorChange}/>);
  }

  return (
    <div className="App">
      {itemList}
      <Counter items={items}/>
      <ResetButton resetDeck={resetDeck}/>
    </div>
  );
}

export default App;
