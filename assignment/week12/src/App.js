import { Routes, Route } from 'react-router-dom';
import './App.css';
import Menubar from './pages/Menubar';
import Surfpage from './pages/Surfpage/Surfpage';
import Musicpage from './pages/Musicpage/Musicpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar/>}>
        <Route path="/surf" element={<Surfpage/>}/>
        <Route path="/music" element={<Musicpage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
