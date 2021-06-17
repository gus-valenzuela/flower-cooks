import React from 'react';
import Item from './Item'


function ItemList(){
  const [data, setData] = React.useState([]);
    const products = [
        {
            pictureURL:"https://i0.wp.com/commememucho.com/wp-content/uploads/2018/06/brownie-trozos1-e1584371731926.jpg",
            title:"Brownie",
            price:"200",
            id:1,
            description:"Una breve descripción",
        },
        {   
            pictureURL:"https://placeralplato.com/files/2015/06/lemon-pie.jpg",
            title:"Lemon Pie",
            price:"150",
            id:2,
            description:"Una breve descripción",
        },
        {   
            pictureURL:"http://cdn.shopify.com/s/files/1/0122/0070/6106/products/oatmealcookies_800x.jpg?v=1606396811",
            title:"Galletitas",
            price:"180",
            id:3,
            description:"Una breve descripción",
        }
    ];

let myPromise = new Promise ((resolve, reject) => {
    setTimeout(function (){
      resolve (products)
    },2000);
    });

    myPromise.then((data) => {setData(data)}) 
    console.log(data)

    return <div>
      {data.map ((product) => {
      return <Item id={product.id} name={product.name} price={product.price} title={product.title} description={product.description} picture={product.pictureURL}> </Item>
      })}
    </div>
  ;
}
export default ItemList