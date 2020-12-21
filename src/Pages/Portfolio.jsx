import React, {Component} from 'react';

import {Button, Col, Container, Nav, Row, Tab} from "react-bootstrap";
import P1 from '../assets/Portfolio.png'
import P2 from '../assets/Portfolio1.png'
import P3 from '../assets/Portfolio2.png'
import P4 from '../assets/Portfolio3.png'
import P5 from '../assets/Portfolio4.png'
import P6 from '../assets/Portfolio5.png'
import P7 from '../assets/Portfolio6.png'
import P8 from '../assets/Portfolio7.png'
import P9 from '../assets/Portfolio8.png'


class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2' >
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Список дел React/Redux</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Деловая таблица React/Redux</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Калькулятор на чистом JavaScript</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fifth'>Калькулятор калорий на ReactJS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='six'>Конвертер и курс валют на ReactJS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='seven'>ReactJS "Помидор"</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='eight'>ReactJS "Погода"</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='nine'>2D игра на чистом JavaScript</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3 text-center ' >
                                <Tab.Pane eventKey='first' >
                                    <img className='rounded-lg shadow'
                                         src={P7}
                                         width={800}
                                    />
                                    <h5 className='mt-3 text-center' >Список дел (Todo List) на React + Redux.</h5>
                                    <a href='https://github.com/itmrgodsend/ReactTodoApp' className="btn btn-outline-primary btn-sm" > Репозиторий </a>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img className='rounded-lg shadow'
                                         src={P8}
                                         width={800}
                                    />
                                    <h5 className='mt-3 text-center' >Деловая таблица на React + Redux, маштабируется до нужных значений и полей, используется для учёта сотрудников или клиентов.</h5>
                                    <a className="btn btn-outline-primary btn-sm" href='https://github.com/itmrgodsend/BusinessTable'> Репозиторий </a>
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
                                    <h5 className='mt-3 text-center'>Калькулятор калорий на ReactJS. Умеет считать несколько продуктов, суммирует калории, граммы.</h5>
                                    <a className="btn btn-outline-primary btn-sm" href='https://github.com/itmrgodsend/ReactFit'> Репозиторий </a>
                                </Tab.Pane>
                                <Tab.Pane eventKey='six' >
                                    <img className='rounded-lg shadow'
                                         src={P5}
                                         width={800}
                                    />
                                    <h5 className='mt-3 text-center' >Конвертер и курс валют на ReactJS, приложение получает данные с помощью API.</h5>
                                    <a href='https://github.com/itmrgodsend/ReactSite' className="btn btn-outline-primary btn-sm" > Репозиторий </a>
                                </Tab.Pane>
                                <Tab.Pane eventKey='seven' >
                                    <img className='rounded-lg shadow'
                                         src={P6}
                                         width={800}
                                    />
                                    <h5 className='mt-3 text-center' >React "Помидор" - приложение для тайм менеджмента, с помощью него задачи дробятся по 25 минут и 5 минут отдыха. Сопровождается красивыми аудио и визуальными алертами.</h5>
                                    <a href='https://github.com/itmrgodsend/ReactPomodoro' className="btn btn-outline-primary btn-sm" > Репозиторий </a>
                                </Tab.Pane>
                                <Tab.Pane eventKey='eight'>
                                    <img className='rounded-lg shadow'
                                         src={P2}
                                         width={800}
                                    />
                                    <h5 className='mt-3 text-center' >React + Bootstrap Приложение с помощью API возвращает погоду в выбранном вами городе.</h5>
                                    <a className="btn btn-outline-primary btn-sm" href='https://github.com/itmrgodsend/weatherReact'> Репозиторий </a>
                                </Tab.Pane>
                                <Tab.Pane eventKey='nine'>
                                    <img className='rounded-lg shadow'
                                         src={P9}
                                         width={800}
                                    />
                                    <h5 className='mt-3 text-center' >2D игра на чистом JavaScript.</h5>
                                    <a className="btn btn-outline-primary btn-sm" href='https://github.com/itmrgodsend/BallJS'> Репозиторий </a>
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