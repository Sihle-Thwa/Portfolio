import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiDiscord,
    SiFigma,
} from 'react-icons/si'


function ToolStack() {
    return (
        <Row style={{
            justifyContent: 'center',
            paddingBottom: '50px',
            color: 'white'
        }}>
            <Col xs={4} md={2} className='tech-icons'>
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiSlack />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiVercel />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiDiscord />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiFigma />
            </Col>


        </Row>
    )
}

export default ToolStack