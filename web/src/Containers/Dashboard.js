import { Button, ButtonGroup } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import "./Dashboard.css";

const missions_instances = [
  {
    name: "trategyGen-GPT is an artificial intelligence designed to autonomously ca...",
    status: "Completed",
    createdAt: "4/29/2023"
  },
  {
    name: "Collect and analyze data for a single investment target or an expanded t...",
    status: "Completed",
    createdAt: "4/29/2023"
  },
  {
    name: "Generate trading strategies based on extracted features, including tradi...",
    status: "Failed",
    createdAt: "4/29/2023"
  },
  {
    name: "Evaluate the performance of each strategy using the Sharpe Ratio, select...",
    status: "Completed",
    createdAt: "4/29/2023"
  },
  {
    name: "Test the selected strategies using chopped data sets or similar investme...",
    status: "Completed",
    createdAt: "4/29/2023"
  },
  {
    name: "Please research the current state of the Bitcoin market and identify any...",
    status: "Completed",
    createdAt: "4/29/2023"
  },
  {
    name: "Please research the current state of the Bitcoin market and identify any...",
    status: "Completed",
    createdAt: "4/29/2023"
  },
]

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [missions, setMissions] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const newSession = () => {
    // 👇️ navigate to /contacts
    navigate('/session');
  };

  const [text, setText] = useState('');

  const getText = async () => {
    const response = await fetch('http://localhost:5000/get_text');
    const data = await response.json();
    setText(data.text);
    alert(`File content: ${data.text}`);
  };

  useEffect(() => {
    const fetch_missions = async () => {
      const response = await fetch('http://localhost:5000/api/missions');
      const data = await response.json();
      setMissions(data);
    }
    // Call the function
    fetch_missions();
 }, []);

  return (
    <div className="multi-select">
      <div className="nav">
        <h1 className="personal-cia">Personal CIA</h1>
        <Button
          variant="contained"
          color="success"
          style={{ textTransform: 'none' }}
          component={Link} to=".././Session"
        >
          Add new session
        </Button>
      </div>

      <div className="nav">
        <ButtonGroup color="primary" variant="outlined" aria-label="outlined button group">
          <Button variant="contained" style={{ textTransform: 'none' }}>All</Button>
          <Button style={{ textTransform: 'none' }}>Completed</Button>
          <Button style={{ textTransform: 'none' }}>Searching</Button>
          <Button style={{ textTransform: 'none' }}>Failed</Button>
        </ButtonGroup>

        <Button
          variant="contained"
          color="info"
          style={{ textTransform: 'none' }}
          component={Link} to="http://localhost:5000/get_text"
        >
          Summarize
        </Button>
      </div>

      <table className="mission-table">
        <thead>
          <tr>
            <th><Checkbox color="default" /></th>
            <th className="th_text">Name</th>
            <th>Status</th>
            <th className="th_date">Created Date</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {missions.map((mission, idx) => {
            return (
              <tr key={idx}>
                <td><Checkbox color="default" /></td>
                <td className="td-text">{mission.name}</td>
                <td style={
                  { color: mission.status === "Completed" ? "green" : mission.status === "Processing" ? "gray" : "" }
                }>
                  {mission.status}
                </td>
                <td>{mission.createdAt}</td>
                <td><DeleteIcon /></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
        }}>
          <div className="nav">
            <h2>New Session</h2>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Dashboard;
