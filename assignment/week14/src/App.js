import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<LoginPage/>} path='/login'></Route>
      <Route element={<RegisterPage/>} path='/register'></Route>
    </Routes>
  );
}

export default App;