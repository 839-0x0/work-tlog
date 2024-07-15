import React, {useState} from 'react';

import TimerItem from './TimerItem';
import InputWithAddButton from './InputWithAddButton';

import './App.css';

function App () {
    const [itemName, setItemName] = useState('');
    const [items, setItems] = useState([]);

    const handleInputChange = (event) => {
        setItemName(event.target.value);
    };

    const handleAddClick = () => {
        setItems([...items, itemName]);
        setItemName('');
    };

    return (
        <div>
            <InputWithAddButton 
                itemName={itemName} 
                handleInputChange={handleInputChange} 
                handleAddClick={handleAddClick} 
            />
            {items.map((item, index) => (
                <div key={index}>
                    <TimerItem itemName={item} />
                </div>
            ))}
        </div>
    );
}

export default App;