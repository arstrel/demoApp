import './App.scss';

import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
