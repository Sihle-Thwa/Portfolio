import React from 'react';
import { Card } from 'react-bootstrap';
import { ImRadioChecked } from "react-icons/im";


function AboutCard() {
    return (
        <Card style={{
            background: "rgba(255, 255, 255, 0.19)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}>
            <Card.Body>
                <blockquote className='blockquote mb-0'>
                    <p style={{ textAlign: "justify" }}>
                        Hello there, I am a programmer from Johannesburg,
                        South Africa.
                        <br />
                        With a Degree obtained from University of Witwatersrand.
                        <br />
                        <br />
                        I enjoy programming and other activities such as:
                    </p>
                    <ul style={{ listStyleType: 'none', textAlign: "left" }}>
                        <li className='about-activity'>
                            <ImRadioChecked /> Physical Sports
                        </li>
                        <li className='about-activity'>
                            <ImRadioChecked /> Reading
                        </li>
                        <li className='about-activity'>
                            <ImRadioChecked /> Listening to Podcasts
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard;