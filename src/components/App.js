import React, {useState} from 'react';

import TimerItem from './TimerItem';
import InputWithAddButton from './InputWithAddButton';

import './App.css';

function App () {
    const [itemName, setItemName] = useState('');
    const [items, setItems] = useState([]);
    const [detaultItem] = useState(['ミーティング','アラート・問い合わせ調査']);

    const handleInputChange = (event) => {
        setItemName(event.target.value);
    };

    const handleAddClick = () => {
        setItems([...items, itemName]);
        setItemName('');
    };

    const handleRemoveItem = (indexToRemove) => {
        setItems(items.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div>
            <InputWithAddButton 
                itemName={itemName} 
                handleInputChange={handleInputChange} 
                handleAddClick={handleAddClick} 
            />
            {detaultItem.map((item, index) => (
                <div key={index}>
                    <TimerItem itemName={item} isRemovable={false}/>
                </div>
            ))}
            {items.map((item, index) => (
                <div key={index}>
                    <TimerItem itemName={item} isRemovable={true} handleRemoveClick={() => handleRemoveItem(index)}/>
                </div>
            ))}
        </div>
    );
}

export default App;