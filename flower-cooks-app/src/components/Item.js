import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Item(props){
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.picture} />
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
        </Card.Body>
        </Card>
    )
}

/* function Item(props){
    return (
        <div className="card-item" key={props.id}>
            <div className="card-content">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">${props.price}</p>
            </div>
            <div className="card-btn">
                <button>Añadir al carrito</button>
            </div>
        </div>
    ) */
//};

export default Item;