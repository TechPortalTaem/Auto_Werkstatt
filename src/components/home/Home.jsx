import React from "react";
import werkBekanntschaft from "../../assets/images/werkBekanntschaft.jpg";
import Inspektion from "../../assets/images/Inspektion.jpg";
import { Col, Row, Button, Card, ListGroup, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className='home-container mt-5'>
      <Row>
        <Col md={6} className='mb-3'>
          <Card>
            <Card.Img
              variant='top'
              src={werkBekanntschaft}
              alt='About Us'
              className='hero-image'
            />
            <Card.Body>
              
              <h2 className='text-info'>Über uns </h2>
              <Card.Title>Die freie Auto Werkstatt ihres Vertrauens</Card.Title>
              <Card.Text>Ihr Vertrauen ist unser Kapital</Card.Text>
              <Card.Text>
                 Unser kompetentes Team ist auf höchstem Niveau ausgebildet und 
                 wird durch ständige Mitarbeiterschulungen mit neuen Techniken und
                  Anforderungen vertraut gemacht.
                   Dabei ist es uns enorm wichtig, 
                   dass alle Bestandteile unserer Services gleichermaßen von allen Kollegen auch abgedeckt sind,
                    um jedem Kunden das bestmögliche Angebot machen zu können.
                   Die Komponenten „Auto, Freizeit und Zubehör“ sind für uns essentiell,
                    um jedem Fahrzeughalter den größtmöglichen Spaß in seinem Fahrzeug zu gewährleisten,
                     aber auch die nötige Sicherheit in seinem Fahrzeug bieten zu können.          
              </Card.Text>
                    Wir finden für jedes Problem eine fachgerechte Lösung und halten dabei die Kosten für Sie so gering wie möglich. 
                    Qualitative Arbeit ist für uns selbstverständlich. 
                    Unsere Transparenz sämtlicher Kosten wird Sie bei Ihrem Besuch in der KFZ-Werkstatt  
              <Card.Text>
                Unser vielfältiges Serviceprogramm bieten wir an nahezu allen Automodellen
                an und können es Ihnen nur Empfehlen.
                Kontaktieren Sie uns und lassen Sie sich selbst überzeugen!
              </Card.Text>
              <Button variant='outline-info'> Vereinbaren Sie einen Termin</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className='mb-3'>
          <Card className="service-card">
            <Card.Img
              variant='top'
              src={Inspektion}
              alt='About Us'
              className='hero-image'
            />
            <Card.Body>
              <h2 className='text-info'>Unsere Leistungen</h2>
              <Card.Title>Alles rund um Ihr Auto.</Card.Title>
              <ListGroup className='services-list'>
                <ListGroup.Item>Inspektion</ListGroup.Item>
                <ListGroup.Item>Bremsen-Service</ListGroup.Item>
                <ListGroup.Item>Achsvermessung</ListGroup.Item>
                <ListGroup.Item>Klimaservice</ListGroup.Item>
                <ListGroup.Item>Abgasanlage</ListGroup.Item>
                <ListGroup.Item>Reifenservice</ListGroup.Item>
                
              </ListGroup>
              <Card.Text className='mt-3'>
              Unsere erfahrenen Mitarbeiter übernehmen alle an Ihrem Fahrzeug anfallenden
              Reparaturen in unserer Meister-Werkstatt kompetent und zuverlässig.
              </Card.Text>
              <Button variant='outline-info'>vereinbaren einen Termin</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className='card mb-5'>
        <h4>
          Was sagen unsere Kunden ?{" "}
          <span className='text-info'> HOME-11</span> KFZ Werkstatt
        </h4>
        <hr />
        <p className="text-center"></p>
      </div>
    </Container>
  );
};

export default Home;
