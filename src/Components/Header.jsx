import React, {Component} from 'react';
import {Container, Navbar, Nav, Button} from "react-bootstrap";
import logo from '../assets/logo2.png'
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";
import Contacts from "../Pages/Contacts";


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar  collapseOnSelect expend='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height='30'
                                width='30'
                                className='d-inline-block align-top'
                                alt='logo'/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='/about'>About me</Nav.Link>
                                <Nav.Link href='/contacts'>Contacts</Nav.Link>
                                <Nav.Link href='/portfolio'>My portfolio</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <BrowserRouter>
                    <Switch>

                        <Route exact path='/about' component={About}/>
                        <Route  path='/portfolio' component={Portfolio}/>
                        <Route  path='/contacts' component={Contacts}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}


export default Header;