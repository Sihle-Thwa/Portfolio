import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutCard from './AboutCard.jsx';
import TechStack from './TechStack.jsx';
import ToolStack from './ToolStack.jsx';


function About() {
    return (
        <Container fluid className='about-wrapper'>

            <Container>
                <Row style={{ justifyContent: 'center', padding: '10px' }}>
                    <Col md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px"
                        }}
                    >

                        <h1 style={{
                            fontSize: "2.1 em",
                            paddingBottom: "20px",
                            color: 'white'
                        }}
                        >
                            Who am I?
                        </h1>
                        <AboutCard />
                    </Col>
                </Row>
                <h1 className='project-heading' style={{ color: 'white' }}>
                    Professional <strong className='bgold'> Skill-Set</strong>
                </h1>

                <TechStack />

                <h1 className='project-heading' style={{ color: 'white' }}>
                    <strong className='bgold'>Tools</strong> I use
                </h1>
                <ToolStack />


            </Container>
        </Container>
    );
}

export default About;