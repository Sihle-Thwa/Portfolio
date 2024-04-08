import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import {

    DiReact,
    DiMongodb,
    DiPython,
    DiJava,
    DiNodejsSmall
} from 'react-icons/di';
import {
    SiRedis,
    SiFirebase,
    SiJavascript,
    SiPostgresql,
} from 'react-icons/si';


function TechStack() {
    return (
        <Row style={{
            justifyContent: 'center',
            paddingBottom: '50px',
            color: 'white'
        }}>
            <Col xs={4} md={2} className='tech-icons'>
                <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiNodejsSmall />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiReact />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiPython />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiJava />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiRedis />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiJavascript />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiFirebase />
            </Col>

        </Row>
    );
}

export default TechStack