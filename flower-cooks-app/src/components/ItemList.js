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

    function getCartItems() {
        let miPromesa = new Promise((resolve, reject) => {  
        setTimeout(()=>{      
            resolve(products);  
          }, 2000);
          setTimeout(()=>{
          reject("Error obteniendo los datos");
          }, 2000);
        });  
      
        miPromesa.then( function(valor){
          console.log(valor);
        }).catch(
          function(error){
            console.log(error);
        }).finally(
            function(){
              alert('Promesa terminada')
          }
        )
      }

      return (
        <div>
           <button onClick={getCartItems}>Ver los productos</button>
         </div>
    )
}

export default ItemList