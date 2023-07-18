import './App.css';
import True from "./True";
import False from "./False";

function App() {
  const bool = true;
  return (
    <div class="body">
      <h2>안녕하세요</h2>
      <div class="page">
        {bool ? <True/> : <False/>}
      </div>
    </div>
  );
}

export default App;
