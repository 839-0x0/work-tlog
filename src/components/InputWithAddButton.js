import React from 'react';

function InputWithAddButton({ itemName, handleInputChange, handleAddClick }) {
    return (
        <div>
            <input type="text" value={itemName} onChange={handleInputChange} />
            <button onClick={handleAddClick} disabled={!itemName.trim()}>追加</button>
        </div>
    );
}

export default InputWithAddButton;