import React from 'react'
import {NavbarBrand} from 'react-bootstrap'
import iconCart from '../assets/images/cart.jpeg'

export default function iconoCarro () {
    return (
        <NavbarBrand href="#carro">
        <img
        src = {iconCart}
        width="35"
        height="35"
        className="d-inline-block align-top"
        alt="Logo carrito de compras"
        />
        </NavbarBrand>
    )
}
