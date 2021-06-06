import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

//this is the footer component, that would contain all of the relevant info for the page, or product

const Footer = () => {

    return (
       <Container fluid className="footer">
           <Row>
               <Col className="hr">
                    <Button variant="secondary" size="sm">
                      Link to My Portfolio!
                    </Button>
               </Col>
               <Col className="hr">
                    <Button variant="secondary" size="sm">
                        Link to My Socials!
                    </Button>
               </Col>
               <Col className="hr">
                    <Button variant="secondary" size="sm">
                    Contact me! 
                    </Button>              
               </Col>
           </Row>
       </Container>
    )

};

export default Footer;