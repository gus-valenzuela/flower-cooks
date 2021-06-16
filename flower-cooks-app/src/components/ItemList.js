import React from 'react';

function ItemList(){
    const products = [
        {
            pictureURL:"",
            title:"Brownie",
            price:"200",
            id:1,
            description:"Una breve descripción",
        },
        {   
            pictureURL:"",
            title:"Lemon Pie",
            price:"150",
            id:2,
            description:"Una breve descripción",
        },
        {   
            pictureURL:"",
            title:"Galletitas",
            price:"180",
            id:3,
            description:"Una breve descripción",
        }
    ];

    return (
        <div>
            {
                products.map((products)=> { return <h5>{products.title}</h5>})
            }
        </div>
    )
}

export default ItemList