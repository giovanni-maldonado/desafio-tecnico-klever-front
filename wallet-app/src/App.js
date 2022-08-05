import './styles/App.css';
import Home from './pages/Home';
import AddTokenPage from './pages/AddTokenPage';
import EditTokenPage from './pages/EditTokenPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-token" element={<AddTokenPage />} />
          <Route path="/edit-token/:id" element={<EditTokenPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
