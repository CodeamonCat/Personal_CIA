import { useState } from "react";
import {
  Button,
  FormControlLabel,
  Checkbox,
  Menu,
  MenuItem,
  TextField,
  Icon,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./NewSession.css";
const NewSession = () => {
  const [groupDropdownAnchorEl, setGroupDropdownAnchorEl] = useState(null);
  const [groupDropdown1AnchorEl, setGroupDropdown1AnchorEl] = useState(null);
  const [groupDropdown2AnchorEl, setGroupDropdown2AnchorEl] = useState(null);
  const [groupDropdown3AnchorEl, setGroupDropdown3AnchorEl] = useState(null);
  const [groupDateTimePickerValue, setGroupDateTimePickerValue] =
    useState(null);
  const [groupDateTimePicker1Value, setGroupDateTimePicker1Value] =
    useState(null);
  const groupDropdownOpen = Boolean(groupDropdownAnchorEl);
  const handleGroupDropdownClick = (event) => {
    setGroupDropdownAnchorEl(event.currentTarget);
  };
  const handleGroupDropdownClose = () => {
    setGroupDropdownAnchorEl(null);
  };
  const groupDropdown1Open = Boolean(groupDropdown1AnchorEl);
  const handleGroupDropdown1Click = (event) => {
    setGroupDropdown1AnchorEl(event.currentTarget);
  };
  const handleGroupDropdown1Close = () => {
    setGroupDropdown1AnchorEl(null);
  };
  const groupDropdown2Open = Boolean(groupDropdown2AnchorEl);
  const handleGroupDropdown2Click = (event) => {
    setGroupDropdown2AnchorEl(event.currentTarget);
  };
  const handleGroupDropdown2Close = () => {
    setGroupDropdown2AnchorEl(null);
  };
  const groupDropdown3Open = Boolean(groupDropdown3AnchorEl);
  const handleGroupDropdown3Click = (event) => {
    setGroupDropdown3AnchorEl(event.currentTarget);
  };
  const handleGroupDropdown3Close = () => {
    setGroupDropdown3AnchorEl(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="new-session">
        <div className="personal-cia">Personal CIA</div>
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="new-session1">+ New Session</div>
        </div>
        <div className="vector-parent">
          <img className="group-item" alt="" src="/line-3.svg" />
          <div className="group-inner" />
        </div>
        <div className="new-session-child" />
        <div className="new-session-item" />
        <div className="new-session-inner" />
        <div className="all">All</div>
        <div className="completed">Completed</div>
        <div className="rectangle-div" />
        <div className="searching">Searching</div>
        <div className="new-session-child1" />
        <div className="summarize">Summarize</div>
        <div className="failed">Failed</div>
        <div className="name">Name</div>
        <div className="status">Status</div>
        <div className="created-date">Created Date</div>
        <img className="vector-icon" alt="" src="/vector.svg" />
        <img className="line-icon" alt="" src="/line-4.svg" />
        <div className="new-session-child2" />
        <div className="rectangle-group">
          <div className="group-child1" />
          <Button
            className="group-button"
            sx={{ width: 145 }}
            variant="contained"
            color="success"
          >
            + Add Session
          </Button>
          <div className="group-parent">
            <FormControlLabel
              className="group-formcontrollabel"
              label="B2B"
              labelPlacement="end"
              control={<Checkbox color="success" size="medium" />}
            />
            <FormControlLabel
              className="group-child2"
              label="B2C"
              labelPlacement="end"
              control={<Checkbox color="success" size="medium" />}
            />
            <FormControlLabel
              className="group-child3"
              label="P2P"
              labelPlacement="end"
              control={<Checkbox color="success" size="medium" />}
            />
            <div className="business-type-parent">
              <p className="business-type">Business Type</p>
              <div className="line-div" />
            </div>
          </div>
          <div className="group-container">
            <div className="business-focus-parent">
              <p className="business-focus">Business Focus</p>
              <div className="group-child4" />
            </div>
            <div className="geo-location-parent">
              <Button
                sx={{ width: 226.7842254638672 }}
                id="button-Geo location"
                aria-controls="menu-Geo location"
                aria-haspopup="true"
                aria-expanded={groupDropdownOpen ? "true" : undefined}
                onClick={handleGroupDropdownClick}
                color="success"
              >
                Geo location
              </Button>
              <Menu
                anchorEl={groupDropdownAnchorEl}
                open={groupDropdownOpen}
                onClose={handleGroupDropdownClose}
              />
            </div>
            <div className="age-group-parent">
              <Button
                sx={{ width: 226.7842254638672 }}
                id="button-Age Group"
                aria-controls="menu-Age Group"
                aria-haspopup="true"
                aria-expanded={groupDropdown1Open ? "true" : undefined}
                onClick={handleGroupDropdown1Click}
                color="success"
              >
                Age Group
              </Button>
              <Menu
                anchorEl={groupDropdown1AnchorEl}
                open={groupDropdown1Open}
                onClose={handleGroupDropdown1Close}
              />
            </div>
            <div className="income-group-parent">
              <Button
                sx={{ width: 226.7842254638672 }}
                id="button-Income Group"
                aria-controls="menu-Income Group"
                aria-haspopup="true"
                aria-expanded={groupDropdown2Open ? "true" : undefined}
                onClick={handleGroupDropdown2Click}
                color="success"
              >
                Income Group
              </Button>
              <Menu
                anchorEl={groupDropdown2AnchorEl}
                open={groupDropdown2Open}
                onClose={handleGroupDropdown2Close}
              />
            </div>
            <div className="field-industry-parent">
              <Button
                sx={{ width: 226.7842254638672 }}
                id="button-Field / Industry"
                aria-controls="menu-Field / Industry"
                aria-haspopup="true"
                aria-expanded={groupDropdown3Open ? "true" : undefined}
                onClick={handleGroupDropdown3Click}
                color="success"
              >
                Field / Industry
              </Button>
              <Menu
                anchorEl={groupDropdown3AnchorEl}
                open={groupDropdown3Open}
                onClose={handleGroupDropdown3Close}
              />
            </div>
          </div>
          <form className="research-type-parent">
            <p className="research-type-container">
              <span className="research-type-container1">
                <span className="research-type">{`Research Type `}</span>
                <span className="span">*</span>
                <span className="research-type">{` `}</span>
              </span>
            </p>
            <div className="group-child4" />
            <FormControlLabel
              className="geo-location-parent"
              label="Market Size/Potential"
              labelPlacement="end"
              control={<Checkbox color="success" size="medium" />}
            />
            <FormControlLabel
              className="group-child7"
              label="Market/Industry Trends"
              labelPlacement="end"
              control={<Checkbox color="success" size="medium" />}
            />
            <FormControlLabel
              className="group-child8"
              label="Target Audience"
              labelPlacement="end"
              control={<Checkbox color="success" size="medium" />}
            />
            <FormControlLabel
              className="group-child9"
              label="Market Segments"
              labelPlacement="end"
              control={<Checkbox color="success" size="medium" />}
            />
            <FormControlLabel
              className="group-child10"
              label="Customer Segments"
              labelPlacement="end"
              control={<Checkbox color="success" size="medium" />}
            />
            <FormControlLabel
              className="group-child11"
              label="Competitors"
              labelPlacement="end"
              control={<Checkbox color="success" size="medium" />}
            />
            <FormControlLabel
              className="group-child12"
              label="Product Marketing"
              labelPlacement="end"
              control={<Checkbox color="success" size="medium" />}
            />
          </form>
          <TextField
            className="group-textfield"
            sx={{ width: 530.5894775390625 }}
            color="success"
            variant="outlined"
            defaultValue="An app that helps people find and book last-minute hotel rooms at discounted rates"
            type="text"
            label="Tell us about your business in 1-2 sentences *"
            placeholder="Placeholder"
            size="medium"
            margin="none"
            required
          />
          <div className="group-div">
            <div className="number-of-attempt-parent">
              <p className="number-of-attempt-container">
                <span className="research-type-container1">
                  <span>{`Number of attempt `}</span>
                  <span className="span2">*</span>
                </span>
              </p>
              <div className="group-child13" />
            </div>
            <img
              className="screenshot-2023-04-28-at-334"
              alt=""
              src="/screenshot-20230428-at-334-1@2x.png"
            />
            <IconButton className="iconbutton" color="primary">
              <Icon>arrow_back_sharp</Icon>
            </IconButton>
            <IconButton className="iconbutton1" color="primary">
              <Icon>arrow_forward_sharp</Icon>
            </IconButton>
            <p className="unlimited">0 = unlimited</p>
          </div>
          <div className="search-timeframe-parent">
            <p className="search-timeframe">{`Search timeframe:   `}</p>
            <div className="wrapper">
              <DatePicker
                label="From"
                value={groupDateTimePickerValue}
                onChange={(newValue) => {
                  setGroupDateTimePickerValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="success"
                    variant="standard"
                    size="medium"
                    helperText=""
                  />
                )}
              />
            </div>
            <div className="container">
              <DatePicker
                label="To"
                value={groupDateTimePicker1Value}
                onChange={(newValue) => {
                  setGroupDateTimePicker1Value(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="success"
                    variant="standard"
                    size="medium"
                    helperText=""
                  />
                )}
              />
            </div>
          </div>
          <div className="div">-</div>
          <h2 className="new-session2">New Session</h2>
          <IconButton className="x" color="primary">
            <Icon>arrow_back_ios_sharp</Icon>
          </IconButton>
        </div>
        <TextField
          className="rectangle-textfield"
          sx={{ width: 52 }}
          color="primary"
          variant="outlined"
          defaultValue="0"
          type="text"
          label="Label"
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
      </div>
    </LocalizationProvider>
  );
};

export default NewSession;
