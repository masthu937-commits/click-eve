
import React from 'react';

function ButtonClick() {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <div>
      <h2>Button click event</h2>
      <button onClick={handleClick}>
        Button Click
      </button>
    </div>
  );
}

export default ButtonClick;
