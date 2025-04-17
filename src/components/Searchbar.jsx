"use client";

import React, { useState, useEffect } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

const Searchbar = () => {
  const [location, setLocation] = useState("");
  const [isLocationAvailable, setIsLocationAvailable] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [startDate, setStartDate] = useState("");

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <Form
      className="border rounded-pill p-1 d-flex align-items-center"
      action="/api/get-activities"
      method="POST"
      style={{ maxWidth: "500px", margin: "0 auto", overflow: "hidden" }}
    >
      <InputGroup className="flex-grow-1">
        {isLocationAvailable ? (
          <FormControl
            id="location"
            name="location"
            type="search"
            value={location}
            placeholder={`🔍 ${location.toUpperCase()}`}
            aria-describedby="button-addon3"
            className="location-placeholder bg-none border-0"
            onChange={handleInputChange}
            // style={{ maxWidth: "50%" }}
          />
        ) : (
          <FormControl
            id="location"
            name="location"
            type="search"
            value={location}
            placeholder="🔍 Enter Zip Code or City"
            aria-describedby="button-addon3"
            className="location-placeholder bg-none border-0"
            onChange={handleInputChange}
            style={{ maxWidth: "50%" }}
          />
        )}
        <FormControl
          id="calendar"
          type="date"
          name="startDate"
          className="bg-none border-0"
          style={{ maxWidth: "150px" }} // Limits calendar input width
        />
        <InputGroup.Text className="bg-none border-0 p-0">
          <Button
            id="search"
            type="submit"
            variant="link"
            className="searchbutton"
            style={{ padding: "0.25rem 0.5rem" }} // Adjusts padding to align the button properly
          >
            <i className="fa fa-search" />
          </Button>
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default Searchbar;
