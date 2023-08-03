import { Routes, Route } from 'react-router-dom';
import './App.css';
import Menubar from './pages/Menubar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar/>}>

      </Route>
    </Routes>
  );
}

export default App;
