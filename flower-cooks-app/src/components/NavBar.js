import React from 'react'
import {Navbar, NavbarBrand} from 'react-bootstrap'
import CartWidget from './CartWidget'

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" className="justify-content-end">
        <NavbarBrand href="#home">Home</NavbarBrand>
        <NavbarBrand href="#about">Nosotros</NavbarBrand>
        <NavbarBrand href="#contact">Contacto</NavbarBrand>
        <CartWidget />
        </Navbar>
    )
};