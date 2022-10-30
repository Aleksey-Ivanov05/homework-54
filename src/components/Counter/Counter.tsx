import React from 'react';
import {Item} from "../../types";
import './Counter.css'

interface Props {
  items: Item[]
}

const Counter: React.FC<Props> = ({items}) => {
  let counter = 0;

  items.forEach(item => {
    if (item.clicked) {
      counter++;
    }
  })

  return (
    <div className="Counter">
      Tries: {counter}
    </div>
  );
};

export default Counter;