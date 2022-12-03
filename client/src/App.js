import Router from './router';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>

    </div>
  );
}

export default App;
