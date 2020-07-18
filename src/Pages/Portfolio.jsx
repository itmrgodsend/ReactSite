import React, {Component} from 'react';

import {Button, Col, Container, Nav, Row, Tab} from "react-bootstrap";
import P1 from '../assets/Portfolio.png'
import P2 from '../assets/Portfolio1.png'
import P3 from '../assets/Portfolio2.png'
import P4 from '../assets/Portfolio3.png'


class About extends Component {
    render() {
        return (
            <Container >
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2' >
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Блог</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Погода API</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Калькулятор на чистом JavaScript</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fifth'>Калькулятор калорий на ReactJS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3 text-center ' >
                                <Tab.Pane eventKey='first' >
                                    <img className='rounded-lg shadow'
                                         src={P1}
                                         width={800}
                                    />
                                    <h5 className='mt-3 text-center' >Простой блог на ReactJS + Bootstrap</h5>
                                    <a href='https://github.com/itmrgodsend/ReactBlog' className="btn btn-outline-primary btn-sm" > Репозиторий </a>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img className='rounded-lg shadow'
                                         src={P2}
                                         width={800}
                                    />
                                    <h5 className='mt-3 text-center' >React + Bootstrap Приложение с помощью API возвращает погоду в выбранном вами городе.</h5>
                                    <a className="btn btn-outline-primary btn-sm" href='https://github.com/itmrgodsend/weatherReact'> Репозиторий </a>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img className='rounded-lg shadow'
                                         src={P3}
                                         width={800}
                                    />
                                    <h5 className='mt-3 text-center' >Калькулятор на чистом JavaScript + HTML & CSS.</h5>
                                    <a className="btn btn-outline-primary btn-sm" href='https://github.com/itmrgodsend/CalculatorJS'> Репозиторий </a>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifth'>
                                    <img className='rounded-lg shadow'
                                         src={P4}
                                         width={800}
                                    />
                                    <h5 className='mt-3 text-center'>Калькулятор калорий на ReactJS. Умеет считать несколько продуктов, суммирует калории, граммы. Алгоритм написан на JS.
                                        https://github.com/itmrgodsend/ReactFit
                                    </h5>
                                    <a className="btn btn-outline-primary btn-sm" href='https://github.com/itmrgodsend/ReactFit'> Репозиторий </a>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;