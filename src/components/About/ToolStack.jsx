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
                <SiVisualstudiocode size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiPostman size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiSlack size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiVercel size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiDiscord size={35} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <SiFigma size={35} />
            </Col>


        </Row>
    )
}

export default ToolStack