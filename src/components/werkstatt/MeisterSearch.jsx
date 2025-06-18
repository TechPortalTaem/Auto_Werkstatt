import React, { useState } from "react";
import UseMessageAlerts from "../hooks/UseMessageAlerts";
import { Form, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import AlertMessage from "../common/AlertMessage";
import { findWerkstattMeister  } from "./MeisterService";

const MeisterSearch = ({ onSearchResult }) => {
  const [searchQuery, setSearchQuery] = useState({
    date: null,
    time: null,
    specialization: "",
  });
  const [showDateTime, setShowDateTime] = useState(false);
  const { errorMessage, setErrorMessage, showErrorAlert, setShowErrorAlert } =
    UseMessageAlerts();

  const handleInputchange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setSearchQuery({ ...searchQuery, date });
  };
  const handleTimeChange = (time) => {
    setSearchQuery({ ...searchQuery, time });
  };

  const handleDateTimeToggle = (e) => {
    const isChecked = e.target.checked;
    setShowDateTime(isChecked);
    if (isChecked) {
      setSearchQuery({ ...searchQuery, date: null, time: null });
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    let searchParams = { specialization: searchQuery.specialization };

    if (searchQuery.date) {
      const formattedDate = format(searchQuery.date, "yyyy-MM-dd");
      searchParams.date = formattedDate;
    }
    if (searchQuery.time) {
      const formattedTime = format(searchQuery.time, "HH:mm");
      searchParams.time = formattedTime;
    }
    try {
      const response = await findWerkstattMeister (searchParams);
      onSearchResult(response.data);
      setShowErrorAlert(false);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setShowErrorAlert(true);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery({
      date: null,
      time: null,
      specialization: "",
    });
    setShowDateTime(false);
    onSearchResult(null);
  };

  return (
    <section className='stickyFormContainer'>
      <h3> Finden der Meister </h3>
      <Form onSubmit={handleSearch}>
        <Form.Group>
          <Form.Label>Spezialisierung</Form.Label>
          <Form.Control
            as='select'
            name='specialization'
            value={searchQuery.specialization}
            onChange={handleInputchange}>
            <option value=''>Spezialisierung auswählen</option>
            <option value='Surgeon'>Kfz-Meister</option>
            <option value='Urologist'>Kfz-Mechatroniker</option>
            <option value='Other'>Andere</option>
          </Form.Control>
        </Form.Group>

        <fieldset>
          <Row className='mb-3'>
            <Col>
              <Form.Group className='mb-3 mt-3'>
                <Form.Check
                  type='checkbox'
                  label='Include Date and Time Availabilty'
                  checked={showDateTime}
                  onChange={handleDateTimeToggle}
                />
              </Form.Group>
              {showDateTime && (
                <React.Fragment>
                  <legend>Datum und Uhrzeit einschließen</legend>
                  <Form.Group className='mb-3'>
                    <Form.Label className='searchText'>Datum </Form.Label>
                    <DatePicker
                      selected={searchQuery.date}
                      onChange={handleDateChange}
                      dateFormat='yyyy-MM-dd'
                      minDate={new Date()}
                      className='form-control'
                      placeholderText='Select date'
                    />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Label className='searchText'>Uhr</Form.Label>
                    <DatePicker
                      selected={searchQuery.time}
                      onChange={handleTimeChange}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      dateFormat='HH:mm'
                      className='form-control'
                      placeholderText='Select time'
                      required
                    />
                  </Form.Group>
                </React.Fragment>
              )}
            </Col>
          </Row>
        </fieldset>

        <div className='d-flex justify-content-center mb-4'>
          <Button type='submit' variant='outline-primary'>
            Suchen
          </Button>
          <div className='mx-2'>
            <Button
              type='button'
              variant='outline-info'
              onClick={handleClearSearch}>
              Suche löschen
            </Button>
          </div>
        </div>
      </Form>
      <div>
        {showErrorAlert && (
          <AlertMessage type={"danger"} message={errorMessage} />
        )}
      </div>
    </section>
  );
};

export default MeisterSearch;
