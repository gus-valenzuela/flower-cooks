import React from 'react'
import {Navbar, NavbarBrand} from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <NavbarBrand href="#home">Home</NavbarBrand>
        <NavbarBrand href="#about">Nosotros</NavbarBrand>
        <NavbarBrand href="#contact">Contacto</NavbarBrand>
        </Navbar>
    )
}