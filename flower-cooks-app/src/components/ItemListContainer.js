import React from 'react'
import CountButtom from './ItemCount'

function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <CountButtom stock="5"/>
        </div>
    );
}

export default ItemListContainer