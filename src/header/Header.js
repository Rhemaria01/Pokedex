import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {MdCatchingPokemon} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFlower3} from 'react-icons/bs'
import {GiPokecog} from 'react-icons/gi'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler,
} from "reactstrap"


const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  const preventDefault = (e) => e.preventDefault()
  const toggle = () => setIsOpen(!isOpen)
    return (
      <Navbar className="navbar fixed-top" light expand="md">
      <NavbarBrand className="navbar-brand">
          
          <Link to="/" className="text-dark logo ms-5 me-2 fs-4"><MdCatchingPokemon className='spinner'/> Pokemon</Link>
      </NavbarBrand>
      
      <NavbarToggler onClick={toggle}/>
      <Collapse  isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>    
            <NavItem className="me-2" onClick={e => preventDefault(e)}><Link to="/" className="link" > <AiOutlineSearch /> PokeFinder</Link></NavItem>
            <NavItem className="me-2" onClick={e => preventDefault(e)}><Link to="/types" className="link" > <BsFlower3 /> Types</Link></NavItem>
            <NavItem className="me-2" onClick={e => preventDefault(e)}><Link to="/pokedex" className="link" > <GiPokecog/> Pokedex</Link></NavItem>                            
          </Nav>
      </Collapse>
  </Navbar>
        )}
      
        

      


   


export default Header

