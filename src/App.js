import './App.css';
import { Typography } from '@mui/material';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className="App">
      <Typography variant="h2">Holiday Destination Picker</Typography>
      <div><MainPage/></div>
    </div>
  );
}

export default App;
