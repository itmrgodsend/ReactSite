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
        <Container>
            <Row >
                <Col>
                    <h3 className='text-center m-3'>Привет, меня зовут Сергей и я Frontend developer</h3>
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
                </Col>
            </Row>
            <Row >
                <Col className='text-center'>
                    <h5 className='text-center m-4'>Мой стек :</h5>
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

        </Container>
    );
};

export default About;