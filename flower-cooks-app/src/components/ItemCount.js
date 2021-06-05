import React from 'react';

export default function(props){
    function increaseCounter(event){
        if(selectedProducts < props.stock) {
            setClicks(selectedProducts + 1);
        }
    }
    function decreaseCounter (event) {
        if(selectedProducts > 1){
            setClicks (selectedProducts - 1);
        }
    }

    const [selectedProducts, setClicks] = React.useState(1);

    return (
        <div>
            <p>{`Comprar ${selectedProducts} productos`}</p>
            <button onClick={decreaseCounter}>Restar</button>
            <button onClick={increaseCounter}>Sumar</button>
        </div>
    )
}