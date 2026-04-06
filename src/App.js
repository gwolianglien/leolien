import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NoPage from './pages/NoPage';
import { fullGradient } from './styles/styles';
import './App.css';

function App() {
  return (
    <div className="app" style={fullGradient}>
      <Navbar />
      <Routes>
        <Route index path="/leolien" element={<Home />} />
        <Route path="/leolien/projects" element={<Projects />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>

  );
}

export default App;
