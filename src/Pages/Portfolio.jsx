import React, {Component} from 'react';

import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import P1 from '../assets/Portfolio.png'
import P2 from '../assets/Portfolio1.png'
import P3 from '../assets/Portfolio2.png'
import P4 from '../assets/Portfolio3.png'


class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
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
                            <Tab.Content className='mt-3' >
                                <Tab.Pane eventKey='first'>
                                    <img src={P1}
                                         width={800}
                                    />
                                    <p>Блог на ReactJS + Bootstrap
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img src={P2}
                                         width={800}
                                    />
                                    <p>React + Bootstrap Приложение с помощью API возвращает погоду в выбранном вами городе.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img src={P3}
                                         width={800}
                                    />
                                    <p>Калькулятор на чистом JavaScript, + чистые HTML & CSS</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifth'>
                                    <img src={P4}
                                         width={800}
                                    />
                                    <p>Калькулятор калорий на ReactJS</p>
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