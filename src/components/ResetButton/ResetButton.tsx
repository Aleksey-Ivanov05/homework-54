import React from 'react';
import './ResetButton.css'

interface Props {
  resetDeck: React.MouseEventHandler;
}

const ResetButton: React.FC<Props> = ({resetDeck}) => {
  return (
    <div>
      <button type="button" onClick={resetDeck} className="ResetButton">Reset</button>
    </div>
  );
};

export default ResetButton;