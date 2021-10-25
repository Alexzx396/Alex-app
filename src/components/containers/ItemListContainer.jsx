import React from 'react'
import ItemCount from './ItemCount';

export default function ItemListContainer({ greeting }) {
    const handleClick=(total) => {
        alert(`la cantidad agregada es ${total}`);
}
    return (
        <div>
            {greeting}
            <ItemCount stock={8} initial={1} onAdd={handleClick} />
        </div>
    )
};

