
import { Accordion, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserImage from "../common/UserImage";
import placeholder from "../../assets/images/placeholder.jpg";

const MeisterCard = ({ arbeiter }) => {
  return (
    <Col key={arbeiter.id} className='mb-4 xs={12}'>
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            <div className='d-flex align-items-center'>
              <Link to={""}>
                <UserImage
                  userId={arbeiter.id}
                  userPhoto={arbeiter.photo}
                  placeholder={placeholder}
                />
              </Link>
            </div>
            <div className='flex-grow-1 ml-3 px-5'>
              <Card.Title className='title'>
                Kfz-Meister.{arbeiter.firstName} {arbeiter.lastName}
              </Card.Title>
              <Card.Title>
                <h6>{arbeiter.specialization}</h6>
              </Card.Title>
              <Card.Text className='review rating-stars'>
                Bewertungen: Einige Sterne
              </Card.Text>
              <Link to={""} className="link">
               Termin buchen
              </Link>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div>
              <Link to={""} className='link-2'>
                Sehen Sie, Was die Leute sagen 
              </Link>{" "}
              <span className='margin-left-space'>Kfz-Meister.{arbeiter.firstName}</span>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  );
};

export default MeisterCard;
