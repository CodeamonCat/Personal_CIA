import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from 'react-router-dom';

import "./Session.css";

const SearchForm = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [numberOfAttempts, setNumberOfAttempts] = useState(1);
    const [businessType, setBusinessType] = useState([]);
    const [businessDescription, setBusinessDescription] = useState("");
    const [geoLocation, setGeoLocation] = useState("");
    const [ageGroup, setAgeGroup] = useState("");
    const [incomeGroup, setIncomeGroup] = useState("");
    const [fieldIndustry, setFieldIndustry] = useState("");
    const [researchType, setResearchType] = useState([]);

    const handleCheckboxChange = (event, setter) => {
        if (event.target.checked) {
            setter(prevState => [...prevState, event.target.value]);
        } else {
            setter(prevState => prevState.filter(value => value !== event.target.value));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Prepare form data
        const formData = {
        // should be changed to the data we need below
          startDate,
          endDate,
          numberOfAttempts,
          businessType,
          businessDescription,
          geoLocation,
          ageGroup,
          incomeGroup,
          fieldIndustry,
          researchType,
        };
      
        try {
          // Send POST request to your Flask backend
          const response = await fetch('http://localhost:5000/api/new_mission', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          // Handle the response from the server
          if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
          } else {
            console.error('Response Error:', response.statusText);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '2%', marginLeft: '2%', marginRight: '2%' }}>
            <div className="row">
                <div className="column">
                    <label htmlFor="search-timeframe" style={{ display: "inline-block", marginRight: "0.5em" }}>Search Timeframe:</label>
                </div>
                <div className="column">
                    <label htmlFor="search-timeframe" style={{ display: "inline-block", marginRight: "0.5em" }}>Start</label>
                    <input type="date" id="start-date" style={{ display: "inline-block", width: "auto" }} value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div className="column">
                    <label htmlFor="search-timeframe" style={{ display: "inline-block", marginRight: "0.5em" }}>End</label>
                    <input type="date" id="end-date" style={{ display: "inline-block", width: "auto" }} value={endDate} onChange={e => setEndDate(e.target.value)} />
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <label htmlFor="number-of-attempts" className="sub-header">Number of Attempts<span className="red-asterisk">*</span></label>
                    <div className="number-of-attempts-row">
                        <input type="number" id="number-of-attempts" value={numberOfAttempts} required className="number-of-attempts-input" onChange={e => setNumberOfAttempts(e.target.value)} />
                        <span>0 = unlimited</span>
                    </div>
                </div>
                <div className="vertical-line">
                    <div className="column" style={{ textAlign: "right" }}>
                        <label htmlFor="business-type" className="sub-header">Business Type</label>
                        <div>
                            <label>
                                <input type="checkbox" name="business-type" value="B2B" onChange={e => handleCheckboxChange(e, setBusinessType)} />
                                B2B
                            </label>
                            <label>
                                <input type="checkbox" name="business-type" value="B2C" onChange={e => handleCheckboxChange(e, setBusinessType)} />
                                B2C
                            </label>
                            <label>
                                <input type="checkbox" name="business-type" value="P2P" onChange={e => handleCheckboxChange(e, setBusinessType)} />
                                P2P
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <label htmlFor="business-description" className="sub-header">Tell us about your business in 1-2 sentences<span className="red-asterisk">*</span></label>
            <textarea id="business-description" rows="4" placeholder="An app that helps people find and book last-minute hotel rooms at discounted rates" required value={businessDescription} onChange={e => setBusinessDescription(e.target.value)}></textarea>

            <label htmlFor="geo-location" className="sub-header">Business Focus</label>
            <div className="row">
                <div className="column">
                    <select id="geo-location" required value={geoLocation} onChange={e => setGeoLocation(e.target.value)}>
                        <option value="">Geo Location</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <select id="age-group" required value={ageGroup} onChange={e => setAgeGroup(e.target.value)}>
                        <option value="">Age Group</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="column">
                    <select id="income-group" required value={incomeGroup} onChange={e => setIncomeGroup(e.target.value)}>
                        <option value="">Income Group</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <select id="field-industry" required value={fieldIndustry} onChange={e => setFieldIndustry(e.target.value)}>
                        <option value="">Field/Industry</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            </div>

            <label htmlFor="research-type" className="sub-header">Research Type<span className="red-asterisk">*</span></label>
            <div className="checkbox-grid">
                <label>
                    <input type="checkbox" name="research-type" value="Market Size/Potential" required onChange={e => handleCheckboxChange(e, setResearchType)} />
                    Market Size/Potential
                </label>
                <label>
                    <input type="checkbox" name="research-type" value="Market Segments" onChange={e => handleCheckboxChange(e, setResearchType)} />
                    Market Segments
                </label>
                <label>
                    <input type="checkbox" name="research-type" value="Product Marketing" onChange={e => handleCheckboxChange(e, setResearchType)} />
                    Product Marketing
                </label>
                <br />
                <label>
                    <input type="checkbox" name="research-type" value="Competitors" onChange={e => handleCheckboxChange(e, setResearchType)} />
                    Competitors
                </label>
                <label>
                    <input type="checkbox" name="research-type" value="Customer Segments" onChange={e => handleCheckboxChange(e, setResearchType)} />
                    Customer Segments
                </label>
                <label>
                    <input type="checkbox" name="research-type" value="Market/Industry Trends" onChange={e => handleCheckboxChange(e, setResearchType)} />
                    Market/Industry Trends
                </label>
                <label>
                    <input type="checkbox" name="research-type" value="Target Audience" onChange={e => handleCheckboxChange(e, setResearchType)} />
                    Target Audience
                </label>
            </div>

            <button type="submit" className="start-search-btn">Start Search</button>
            <div className="nav">
                <Button
                    variant="contained"
                    color="info"
                    style={{ textTransform: 'none' }}
                    component={Link} to="../Dashboard"
                >
                    Back to Dashboard
                </Button>
            </div>

        </form>

    );

};

export default SearchForm;