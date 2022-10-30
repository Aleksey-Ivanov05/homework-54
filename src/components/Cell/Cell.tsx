import React from 'react';
import './Cell.css';

interface Props {
  hasItem: boolean;
  clicked: boolean;
  onColorChange: React.MouseEventHandler;
}
const Cell: React.FC<Props> = ({hasItem, clicked, onColorChange}) => {
  let o = '';
  let className = 'Cell'
  if (hasItem) {
    o = 'o';
  }

  if (clicked) {
    className = 'Cell Cell-white';
  }
  return (
    <div className={className} onClick={onColorChange}>
      <span className="o">{o}</span>
    </div>
  );
};

export default Cell;