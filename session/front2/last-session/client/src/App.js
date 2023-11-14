import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [newData, setNewData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/data');
      setData(response.data);
    } catch (error) {
      console.error('데이터를 가져오는 중 에러 발생', error);
    }
  };

  const handleInputChange = (e) => {
    setNewData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/data', { message: newData });
      fetchData();
      setNewData('');
    } catch (error) {
      console.error('데이터를 생성하는 중 에러 발생', error);
    }
  };

  return (
    <div className="App">
      <h2>node.js 실습</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={newData} onChange={handleInputChange} />
        <button type='submit'>데이터 생성</button>
      </form>
      <h2>데이터 목록</h2>
      {data && data.map((item) => (
        <p key={item.message}>{item.message}</p>
      ))}
    </div>
  );
}

export default App;
