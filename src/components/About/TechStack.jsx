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
                <CgCPlusPlus size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiNodejsSmall size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiReact size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiMongodb size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiPython size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <DiJava size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiRedis size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiJavascript size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiPostgresql size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiFirebase size={35} />
            </Col>

        </Row>
    );
}

export default TechStack