import { Routes, Route } from 'react-router-dom';
import './App.css';
import Menubar from './pages/Menubar';
import Surfpage from './pages/Surfpage/Surfpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar/>}>
        <Route path="/surf" element={<Surfpage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
