import React, { useState } from 'react'
import "./Home.css"
import CloseButton from 'react-bootstrap/CloseButton';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
function Home() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Container className="main_home">
            <div>
                <div className=" pe-1 pt-3 me-4 fs-5">
                    <CloseButton
                        variant='white'
                        className={`close-button ${isHovered ? "rotate" : ""}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
                <div>
                    <h2 className=" title_main d-flex justify-content-center align-items-center text-white p-5">
                        Epic Games : An American Vedio Game And Software Developer And Publisher Based in Cary , North Carolina
                    </h2>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <Image className="main_image"
                        src={require('../Assets/fortnite-pictures-b5kfcchwazwiz3cs 1.jpg')}

                    ></Image>
                </div>
                <div className="w-100 d-flex justify-content-center align-items-center mt-4 mb-4">
                    <p className=" title1 d-flex justify-content-center text-white  ">
                        Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
                    </p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <Button className="visit_btn bg-white btn text-black  ">
                        Visit Website
                    </Button>
                </div>
                <div className=" card_image d-flex justify-content-center align-items-center gap-5 pt-5">
                    <Card style={{ width: "18rem" }} className="bg-black">
                        <Card.Img
                            variant="top"
                            src={require('../Assets/Mask group (2).jpg')}
                        />
                        <Card.Body>
                            <p className="text-white ">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "18rem" }} className="bg-black">
                        <Card.Img
                            variant="top"
                            src={require('../Assets/Mask group.jpg')}
                        />
                        <Card.Body>
                            <p className="text-white">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "18rem" }} className="bg-black">
                        <Card.Img
                            variant="top"
                            src={require('../Assets/Mask group (1).jpg')}
                        />
                        <Card.Body>
                            <p className="text-white">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="title4">
                    <h2 className="pt-5 d-flex justify-content-center align-items-center text-white">
                        Our Contributions
                    </h2>
                    <p className="ourpara pt-4 text-white ">
                        Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
                    </p>
                </div>
                <div className="title_head">
                    <Row className="title3 d-flex justify-content-center align-items-center text-white mt-5 ">
                        <Col className="text-white ">
                            <h1>5M</h1>
                            <p>Daily User Engagement</p>
                        </Col>
                        <Col className="text-white">
                            <h1>$500K</h1>
                            <p >Revenue Surge for an Platform</p>
                        </Col>
                        <Col className="text-white">
                            <h1>10X</h1>
                            <p >
                                ROAS roll on all our marketing Campaigns
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className="title5  d-flex justify-content-center align-items-center text-white">
                    <h3 className="pt-5">
                        Interested In Delving Deepeer Into The Project ?
                    </h3>
                </div>
                <div className=" d-flex justify-content-center align-items-center text-white">
                    <p className="pt-2 lastpara">
                        If You'd like to explore further details about our initiatives or
                        any of our affiliated brands, don't hesitate to conect. You
                        can reach out to us via email at <strong>hello@abc.com</strong> or give us a
                        call at +91 480 20802730
                    </p>
                </div>
                <div className="main_btns d-flex justify-content-center align-items-center gap-5 mt-5">
                    <Button variant="outline-light" className=" main_btns1 mt-4 p-3 ">
                        Ring Us On Skype
                    </Button>
                    <Button variant="light" className="mt-4 p-3  ">
                        Visit Contact Us
                    </Button>
                </div>
                <div className="home_end d-flex justify-content-center align-items-center text-white mt-5 ">
                    <footer className="pt-5">
                        2019-2023 abc Technology Solutions Pvt.Ltd.
                        All rights reserved
                    </footer>
                </div>
            </div>
        </Container>
    );
}

export default Home