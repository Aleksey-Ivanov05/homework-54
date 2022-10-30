import React from 'react';
import Cell from "../Cell/Cell";
import './Deck.css'
import {Item} from "../../types";

interface Props {
  items: Item[];
  colorChange: (id: string) => void;
}

const Deck: React.FC<Props> = ({items,colorChange}) => {

  return (
    <div className="Deck">
      {items.map((item) => (
        <Cell key={item.id} hasItem={item.hasItem} clicked={item.clicked} onColorChange={() => colorChange(item.id)} />
      ))}
    </div>
  );
};

export default Deck;