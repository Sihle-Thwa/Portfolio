import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeWriter from './TypeWriter';
import homeImage from "../../Assets/homeImage.jpg"

import {
    AiFillGithub,

    AiFillLinkedin,
} from 'react-icons/ai';


function Home() {
    return (
        <section>
            <Container fluid className='home-wrapper' id='home'>
                <Container className='home-content'>
                    <Row>
                        <Col md={7} className='home-header'>
                            <h1 style={{ paddingBottom: 15 }} className='heading'>
                                Welcome to my Portfolio.
                            </h1>
                            <h1 className='h-name'>
                                My Name Is
                                <strong className='bgold'> Siphesihle B. Mthethwa</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <TypeWriter />
                            </div>
                        </Col>

                        <Col md={5} >
                            <img
                                src={homeImage}
                                alt="home page"
                                className='img-fluid'
                            />
                        </Col>
                    </Row>

                </Container>

            </Container>

            <Container fluid className='about-wrapper'>
                <Container>
                    <Row>
                        <Col md={8} className='about-description'>
                            <h1 style={{ fontSize: "2.5em" }}>
                                Allow me to <span className='bgold'>introduce</span> myself
                            </h1>
                            <p>
                                Full-Stack Developer with a passion for crafting dynamic and robust applications to streamline business processes.
                                <br />
                                <br /> Starting my programming journey with languages like
                                <b className='bgold'> Java, SQL, HTML and CSS.</b>

                                <br /> Over the years I have learnt
                                <b className='bgold'> JavaScript, Python and C.</b>

                                <br /> Using Technologies and Frameworks like:
                                <b className='bgold'> ReactJS, NodeJS, ExpressJS, Bootstrap, MaterialUI. </b>
                                <br /> Incorporating Database Technologies:
                                <b className='bgold'> MySQL, MongoDB, Microsoft SQL Server, PostgreSQL. </b>
                            </p>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={12} className='about-social' style={{ color: 'white' }}>
                            <h1>Where to find me?</h1>
                            <p> <span className='bgold'>Connect</span> with me</p>
                            <ul>
                                <li className='social-icons'>
                                    <a
                                        href='https://github.com/Sihle-Thwa'
                                        color='white'
                                        target='_blank'
                                        rel='noreferrer'
                                        className='icon-colour h-social-icons'>
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li className='social-icons'>
                                    <a
                                        href='https://www.linkedin.com/in/siphesihle-mthethwa/'
                                        target='_blank'
                                        color='white'
                                        rel='noreferrer'
                                        className='icon-colour h-social-icons'>
                                        <AiFillLinkedin />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>

                </Container>
            </Container>
        </section>
    )
}
export default Home;