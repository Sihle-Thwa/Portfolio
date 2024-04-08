import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function CertificateCard() {
    return (
        <Container className="certificate-wrapper">
            <Row>
                <Col>
                    <div className="certificate-item">
                        <div className="certificate-front">
                            <div className="certificate-info">
                                <h3>React.js</h3>
                            </div>
                        </div>
                        <div className="certificate-back">
                            <div className="certificate-details">
                                <p>React.js Essential Training</p>
                                <span className="status"> Feb, 2024 - IBM, Coursera</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="certificate-item">
                        <div className="certificate-front">
                            <div className="certificate-info">
                                <h3>Cloud Computing</h3>
                            </div>
                        </div>
                        <div className="certificate-back">
                            <div className="certificate-details">
                                <p>Introduction to Cloud Computing</p>
                                <span className="status"> Oct, 2022 - IBM, Coursera</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="certificate-item">
                        <div className="certificate-front">
                            <div className="certificate-info">
                                <h3>DevOps</h3>
                            </div>
                        </div>
                        <div className="certificate-back">
                            <div className="certificate-details">
                                <p>Introduction to DevOps Methodologies</p>
                                <span className="status"> Oct, 2022 - IBM, Coursera</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="certificate-item">
                        <div className="certificate-front">
                            <div className="certificate-info">
                                <h3>Agile</h3>
                            </div>
                        </div>
                        <div className="certificate-back">
                            <div className="certificate-details">
                                <p>Introduction to Agile Development and Scrum</p>
                                <span className="status"> Oct, 2022 - IBM, Coursera</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="certificate-item">
                        <div className="certificate-front">
                            <div className="certificate-info">
                                <h3>Python</h3>
                            </div>
                        </div>
                        <div className="certificate-back">
                            <div className="certificate-details">
                                <p>Python Project for AI and Application Development</p>
                                <span className="status"> Oct, 2022 - IBM, Coursera</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="certificate-item">
                        <div className="certificate-front">
                            <div className="certificate-info">
                                <h3>Python</h3>
                            </div>
                        </div>
                        <div className="certificate-back">
                            <div className="certificate-details">
                                <p>Python for Data Science, AI and Development</p>
                                <span className="status"> Oct, 2022 - IBM, Coursera</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default CertificateCard;