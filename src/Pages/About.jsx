import React from 'react';
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";
import StackImg1 from '../assets/Stack/1.png'
import StackImg2 from '../assets/Stack/2.svg'
import StackImg3 from '../assets/Stack/3.png'
import StackImg4 from '../assets/Stack/4.png'
import StackImg5 from '../assets/Stack/5.png'
import StackImg6 from '../assets/Stack/6.png'
import StackImg7 from '../assets/Stack/7.png'
import StackImg8 from '../assets/Stack/8.png'
import StackImg9 from '../assets/Stack/9.png'


const About = () => {
    return (
        <div className='wp'>
            <Container >
                <Row>
                    <Col sm={10}>
                        <h3 className='text-center'>Привет, меня зовут Сергей и я Frontend developer</h3>
                        <p className='text-left'>Раньше программировал на JS в свободное от работы время, год назад
                            сменил
                            основную работу и теперь посвящаю всё свободное время разработке.
                            JavaScript изучаю уже 2 года и с интересом познаю все его возможности, несколько месяцев
                            пишу на
                            ReactJS, параллельно осваиваю NodeJS.<br/>
                            • В свободное время тренируюсь в написание кода на таких площадках как Codewars, Hexlet(у
                            них
                            много
                            практических задач).<br/>
                            • Прошёл обучение в онлайн школе LoftSchool, по специальности JavaScript (Сертификат
                            прикреплён
                            к
                            резюме).
                            Пишу чистый код. Стремлюсь работать в дружном коллективе и постоянно совершенствоваться.
                        </p>
                        <h5>Мой стек :</h5>

                        <img
                            className='item grayscale m-3 rounded'
                            width={50}
                            height={50}
                            src={StackImg1}
                            alt='JavaScript'
                        />
                        <img
                            className='grayscale m-3 rounded'
                            width={50}
                            height={50}
                            src={StackImg2}
                        />

                        <img
                            className='grayscale m-3 rounded'
                            width={50}
                            height={50}
                            src={StackImg3}
                        />
                        <img
                            className='grayscale m-3 rounded'
                            width={50}
                            height={50}
                            src={StackImg4}
                        />

                        <img
                            className='grayscale m-3 rounded'
                            width={50}
                            height={50}
                            src={StackImg5}
                        />


                        <img
                            className='grayscale m-3 rounded'
                            width={50}
                            height={50}
                            src={StackImg6}
                        />
                        <img
                            className='grayscale m-3 rounded'
                            width={50}
                            height={50}
                            src={StackImg7}
                        />
                        <img
                            className='grayscale m-3 rounded'
                            width={50}
                            height={50}
                            src={StackImg8}
                        />
                        <img
                            className='grayscale m-3 rounded'
                            width={50}
                            height={50}
                            src={StackImg9}
                        />
                    </Col >

                </Row>
            </Container>
        </div >
    );
};

export default About;