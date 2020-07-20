import React from 'react';
import {Card, Col, Container, ListGroup, Media, Nav, Row} from "react-bootstrap";
import StackImg1 from '../assets/Stack/1.png'
import StackImg2 from '../assets/Stack/2.svg'
import StackImg3 from '../assets/Stack/3.png'
import StackImg4 from '../assets/Stack/4.png'
import StackImg5 from '../assets/Stack/5.png'
import StackImg6 from '../assets/Stack/6.png'
import StackImg7 from '../assets/Stack/7.png'
import StackImg8 from '../assets/Stack/8.png'
import StackImg9 from '../assets/Stack/9.png'
import {FileIcon} from '@primer/octicons-react'
import {RocketIcon } from '@primer/octicons-react'
import {BriefcaseIcon } from '@primer/octicons-react'
const About = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className='m-3 shadow-sm border-0'>
                        <Card.Body>
                            <FileIcon size={24}  verticalAlign='middle' />

                            <Card.Title className='text-center '>Привет, меня зовут Сергей и я Frontend developer</Card.Title>
                            <p className='text-left'>&nbsp;&nbsp;Раньше программировал на JS в свободное от работы время, год назад
                                сменил
                                основную работу и теперь посвящаю всё свободное время разработке .
                                JavaScript изучаю уже 2 года и с интересом познаю все его возможности, шесть месяцев
                                пишу на
                                ReactJS, параллельно осваиваю Redux и препроцессоры.<br/>
                                &nbsp;&nbsp;Стремлюсь работать в дружном коллективе и постоянно совершенствоваться.
                                Интересуют долгосрочные вакансии, считаю, чем сплочённее команда, тем качественней будет результат.<br/>
                                • В свободное время тренируюсь в написание кода на таких площадках как Codewars,
                                Hexlet(у
                                них
                                много
                                практических задач).<br/>
                                • Прошёл обучение в онлайн школе LoftSchool, по специальности JavaScript.
                                Пишу чистый код.
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className='m-3 shadow-sm border-0'>
                        <Card.Body>
                            <RocketIcon  size={24}  verticalAlign='middle' />
                            <Card.Title className='text-center m-3'>План развития на год / Personal Devmap</Card.Title>
                            <ul>
                                <li>Дорасти до middle позиции</li>
                                <li>Освоить Back-end стать Full-Stack</li>
                                <li>Освоить нейронные сети</li>
                                <li>Дочитать всю фундаментальную литература по программированию</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className='m-3 shadow-sm border-0'>
                        <Card.Body>
                            <BriefcaseIcon  size={24}  verticalAlign='middle' />
                            <Row>
                                <Col className='text-center'>
                                    <h5 className='text-center m-3'>My stack</h5>
                                    <img
                                        className='anim m-3 rounded m-4'
                                        width={50}
                                        height={50}
                                        src={StackImg1}
                                        alt='JavaScript'
                                        title='JavaScript'
                                    />
                                    <img
                                        className='anim m-3 rounded m-4'
                                        width={50}
                                        height={50}
                                        src={StackImg2}
                                        alt='ReactJS'
                                        title='ReactJS'
                                    />

                                    <img
                                        className='anim m-3 rounded m-4'
                                        width={50}
                                        height={50}
                                        src={StackImg3}
                                        alt='Node.JS'
                                        title='Node.JS'
                                    />
                                    <img
                                        className='anim m-3 rounded m-4'
                                        width={50}
                                        height={50}
                                        src={StackImg4}
                                        alt='HTML'
                                        title='HTML'
                                    />

                                    <img
                                        className='anim m-3 rounded m-4'
                                        width={50}
                                        height={50}
                                        src={StackImg5}
                                        alt='CSS'
                                        title='CSS'
                                    />


                                    <img
                                        className='anim m-3 rounded m-4'
                                        width={50}
                                        height={50}
                                        src={StackImg6}
                                        alt='Linux'
                                        title='Linux'
                                    />
                                    <img
                                        className='anim m-3 rounded m-4'
                                        width={50}
                                        height={50}
                                        src={StackImg7}
                                        alt='Git'
                                        title='Git'
                                    />
                                    <img
                                        className='anim m-3 rounded m-4'
                                        width={50}
                                        height={50}
                                        src={StackImg8}
                                        alt='Webpack'
                                        title='Webpack'
                                    />
                                    <img
                                        className='anim m-3 rounded m-4'
                                        width={50}
                                        height={50}
                                        src={StackImg9}
                                        alt='Bootstrap'
                                        title='Bootstrap'
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                </Col>

            </Row>
            <div className='text-center'>
            <a className="btn btn-outline-primary mt-4 mb-5 m-2" href="/contacts" role="button">Мои контакты</a>
                <a className="btn btn-outline-primary mt-4 mb-5 m-2" href="/portfolio" role="button">Моё портфолио</a>
            </div>


        </Container>
    )
        ;
};

export default About;