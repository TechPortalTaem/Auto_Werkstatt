import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MeisterCard from "./MeisterCard";
import { getWerkstatt } from "./MeisterService";
import MeisterSearch from "./MeisterSearch";
import UseMessageAlerts from "../hooks/UseMessageAlerts";

const MeisterListing = () => {
  const [veterinarians, setVeterinarians] = useState([]);
  const [allVeterinarians, setAllVeterinarians] = useState([]);
  const { errorMessage, setErrorMessage, showErrorAlert, setShowErrorAlert } =
    UseMessageAlerts();

  useEffect(() => {
    getWerkstatt()
      .then((data) => {
        setVeterinarians(data.data);
        setAllVeterinarians(data.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        setShowErrorAlert(true);
      });
  }, []);


  const handleSearchResult = (veterinarians) => {
    if (veterinarians === null) {
      setVeterinarians(allVeterinarians);
    } else if (Array.isArray(veterinarians) && veterinarians.length > 0) {
      setVeterinarians(veterinarians);
    } else {
       setVeterinarians([]);
    }
   
  };

  

  if (veterinarians.length === 0) {
    return <p>No veterinarians found at this tiime</p>;
  }

  return (
    <Container>
      <Row className='justify-content-center'>
        <h2 className='text-center mb-4 mt-4'>Meet Our Veterinarians</h2>
      </Row>

      <Row className='justify-content-center'>
        <Col md={4}>
          <MeisterSearch onSearchResult={handleSearchResult} />
        </Col>
        <Col md={7}>
          {veterinarians.map((vet, index) => (
            <MeisterCard key={index} vet={vet} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MeisterListing;
