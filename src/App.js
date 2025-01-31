import './App.css';
import { Typography } from '@mui/material';
import HomePage from './Pages/login/login';
function App() {
  return (
    <div className="App">
            <Typography variant="h4">Holiday Destination Picker</Typography>
      <div><HomePage/></div>
    </div>
  );
}

export default App;
