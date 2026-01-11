# Personal CIA

An AI-powered business intelligence and market research application that leverages Auto-GPT to conduct automated research missions. Personal CIA helps entrepreneurs and businesses gather competitive intelligence, market insights, and strategic analysis through autonomous AI agents.

## 🎯 Features

- **Automated Research Missions**: Create custom research tasks that Auto-GPT executes autonomously
- **Mission Dashboard**: Track and manage multiple research missions with real-time status updates
- **AI-Powered Summaries**: Generate comprehensive summaries from multiple research outputs using OpenAI
- **Flexible Research Parameters**: Configure research scope, timeframe, business type, and focus areas
- **Mission Management**: View, filter, and delete completed or failed missions
- **Status Tracking**: Monitor missions with three states: Processing, Completed, and Failed

## 🛠️ Technology Stack

### Backend
- **Flask** - Python web framework for REST API
- **Flask-CORS** - Cross-origin resource sharing
- **OpenAI API** - GPT-3 integration for summarization
- **Auto-GPT** - Autonomous AI agent for research execution

### Frontend
- **React 18** - UI framework
- **Material-UI (MUI)** - Component library
- **React Router** - Navigation
- **Create React App** - Build tooling

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) and npm
- **Python 3** (v3.8 or higher)
- **Flask**
- **Auto-GPT** ([installation guide](https://github.com/Significant-Gravitas/Auto-GPT))
- **OpenAI API Key**

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/CodeamonCat/Personal_CIA.git
cd Personal_CIA
```

### 2. Backend Setup

#### Install Python Dependencies
```bash
pip install flask flask-cors openai
```

#### Configure OpenAI API Key
Create a file at `backend/openai.api_key` and add your OpenAI API key:
```bash
echo "your-openai-api-key-here" > backend/openai.api_key
```

#### Configure Auto-GPT Path
Edit `backend/app.py` and update the `AUTO_GPT_PATH` variable to point to your Auto-GPT installation:
```python
AUTO_GPT_PATH = '/path/to/your/Auto-GPT'
```

### 3. Frontend Setup

#### Install Dependencies
```bash
cd web
npm install
cd ..
```

Or install from the root directory:
```bash
npm install --prefix ./web/
```

## 🎮 Usage

### Starting the Application

You'll need two terminal windows to run both the backend and frontend.

#### Terminal 1: Start the Backend (Flask API)
```bash
sh flask_init.sh
```
The backend server will start on `http://localhost:5000`

#### Terminal 2: Start the Frontend (React App)
```bash
npm start --prefix ./web/
```
The web application will open automatically at `http://localhost:3000`

### Using the Application

1. **Access the Dashboard**: Navigate to `http://localhost:3000` and click "LOG IN"
2. **Create a New Mission**: Click "Add new session" to create a research mission
3. **Configure Research Parameters**:
   - Search timeframe (start and end dates)
   - Number of attempts (0 = unlimited)
   - Business type (B2B, B2C, P2P)
   - Business description (1-2 sentences)
   - Business focus (geo location, age group, income group, industry)
   - Research type (market size, competitors, trends, etc.)
4. **Submit**: Click "Start Search" to launch the mission
5. **Monitor Progress**: Return to the dashboard to track mission status
6. **Generate Summaries**: Select completed missions and click "Summarize" to generate an AI summary

## 🔌 API Endpoints

All endpoints return JSON responses.

### Create New Mission
**POST** `/api/new_mission`

**Request Body:**
```json
{
  "businessDescription": "string - user's research prompt",
  "numberOfAttempts": "int - number of attempts"
}
```

**Response:**
```json
{
  "name": "string",
  "date": "YYYY-MM-DD-HH:MM:SS",
  "status": 0
}
```

### List All Missions
**GET** `/api/missions`

**Response:**
```json
[
  {
    "id": 0,
    "selected": false,
    "name": "string",
    "status": "Completed|Processing|Failed",
    "createdAt": "YYYY-MM-DD-HH:MM:SS"
  }
]
```

### Check Mission Progress
**GET** `/api/scan_process`

**Response:**
```json
{
  "agent_status": [0, 1, -1, ...]
}
```
Status codes: `1` = Completed, `0` = Processing, `-1` = Failed

### Delete Mission
**POST** `/api/delete_mission`

**Request Body:**
```json
{
  "index": "int - mission index"
}
```

### Generate Summary
**POST** `/api/summary`

**Request Body:**
```json
{
  "indices": [0, 1, 2]
}
```

**Response:**
```json
{
  "summary": "string - AI-generated summary"
}
```

### Get Summary Text
**GET** `/get_text`

**Response:**
```json
{
  "text": "string - content from summary.txt"
}
```

## 📁 Project Structure

```
Personal_CIA/
├── backend/
│   ├── app.py              # Main Flask application
│   ├── server.py           # Alternative server (development)
│   ├── summary.txt         # Sample summary output
│   └── openai.api_key      # OpenAI API key (not tracked)
├── web/
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── Containers/     # React page components
│   │   │   ├── Landing.js  # Landing page
│   │   │   ├── Dashboard.js # Mission dashboard
│   │   │   ├── Session.js   # New mission form
│   │   │   └── ...
│   │   ├── App.js          # Main React component
│   │   └── index.js        # React entry point
│   └── package.json        # Frontend dependencies
├── flask_init.sh           # Backend startup script
├── package.json            # Root package.json
└── README.md              # This file
```

## 🎥 Demo

https://user-images.githubusercontent.com/55758600/235574177-220ed7fd-6d7b-498e-8e08-4857597ff7f2.mp4

## ⚙️ Configuration

### Debug Mode
To enable debug mode in the backend, edit `backend/app.py`:
```python
debug_mode = True  # Set to True to skip Auto-GPT execution
```

### CORS Configuration
The backend is configured to accept requests from `http://localhost:3000`. To change this, edit the CORS settings in `backend/app.py`:
```python
app.config['CORS_RESOURCES'] = {r"/api/*": {"origins": "your-origin-here"}}
```

### OpenAI Model Configuration
Adjust OpenAI parameters in `backend/app.py`:
```python
model = "text-davinci-003"  # OpenAI model
temperature = 0.5           # Creativity level (0.0 - 1.0)
max_tokens = 4096          # Maximum response length
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 🐛 Troubleshooting

### Backend Issues
- **Error: OpenAI API key not found**: Ensure `backend/openai.api_key` exists and contains a valid API key
- **Error: Auto-GPT path invalid**: Update `AUTO_GPT_PATH` in `backend/app.py` to point to your Auto-GPT installation
- **CORS errors**: Verify the frontend is running on `http://localhost:3000` or update CORS settings

### Frontend Issues
- **Cannot connect to backend**: Ensure the Flask server is running on port 5000
- **Dependencies missing**: Run `npm install` in the `web` directory
- **Port 3000 already in use**: Stop other applications using port 3000 or specify a different port

## 📧 Support

For issues and questions, please open an issue on the GitHub repository.
