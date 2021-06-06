import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

//this is where you would plug in content 

const Content = () => {

    return (
        <div>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.artyfactory.com/sitebody/sitebody_img/buttons/art_appreciation/art-movements/cubism.jpg" />
                        <Card.Body>
                            <Card.Title>Some Art!</Card.Title>
                                <Card.Text>
                                    This is an explanation of this thing!
                                </Card.Text>
                                <Button variant="primary">Buy this thing!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.absolutearts.com/contemporary_original_artworks/paintings/3_400.jpg" />
                        <Card.Body>
                            <Card.Title>Some more Art!</Card.Title>
                                <Card.Text>
                                    Here is the history of this thing!
                                </Card.Text>
                                <Button variant="primary">Learn about this thing!</Button>
                        </Card.Body>
                        </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Peeling_Bodies_by_Chris_Dyer.jpg/250px-Peeling_Bodies_by_Chris_Dyer.jpg" />
                            <Card.Body>
                                <Card.Title>Guess what? More Art!</Card.Title>
                                    <Card.Text>
                                        Lots of exciting thing about this!
                                    </Card.Text>
                                    <Button variant="primary">Donate today!</Button>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Content;