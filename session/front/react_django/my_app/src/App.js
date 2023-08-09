import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BoardList from './BoardList';
import CreateBoard from './CreateBoard';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <h1>예지의 방명록</h1>
      </div>
      <div><Link to ="/">방명록 리스트</Link></div>
      <div><Link to ="/create">벙명록 작성</Link></div>
      <Routes>
        <Route path="/" element={<BoardList/>}/>
        <Route path="/create" element={<CreateBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
