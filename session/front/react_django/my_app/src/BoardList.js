import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const BoardList = () => {
  const [boards, setBoards] = useState([]);
  const [editedBoards, setEditedBoards] = useState({});

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = () => {
    axios.get('http://127.0.0.1:8000/board/')
      .then(response => {
        setBoards(response.data);
        // editedBoards 초기화
        const initialEditedBoards = {};
        response.data.forEach(board => {
          initialEditedBoards[board.id] = { title: board.title, content: board.content };
        });
        setEditedBoards(initialEditedBoards);
      })
      .catch(error => {
        console.error('Error fetching boards:', error);
      });
  };

  const formatUpdatedAt = (isoString) => {
    const date = new Date(isoString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return new Intl.DateTimeFormat('ko-KR', options).format(date);
  };

  const deleteBoard = (id) => {
    axios.delete(`http://127.0.0.1:8000/board/${id}/`)
      .then(response => {
        fetchBoards();
      })
      .catch(error => {
        console.error('Error deleting board:', error);
      });
  };

  const updateBoard = (id, newTitle, newContent) => {
    axios.put(`http://127.0.0.1:8000/board/${id}/`, { title: newTitle, content: newContent })
      .then(response => {
        fetchBoards();
      })
      .catch(error => {
        console.error('Error updating board:', error);
      });
  };

  const handleEditChange = (id, field, value) => {
    setEditedBoards(prevEditedBoards => ({
      ...prevEditedBoards,
      [id]: {
        ...prevEditedBoards[id],
        [field]: value,
      },
    }));
  };

  return (
    <div className="Board-list">
      {boards.map(board => (
        <div key={board.id} className="Board-card">
        <input
          value={editedBoards[board.id]?.title}
          onChange={e => handleEditChange(board.id, 'title', e.target.value)}
        />
        <input
          value={editedBoards[board.id]?.content}
          onChange={e => handleEditChange(board.id, 'content', e.target.value)}
        />
          <p>{formatUpdatedAt(board.updated_at)} 작성</p>
          <button onClick={() => updateBoard(board.id, editedBoards[board.id].title, editedBoards[board.id].content)}>수정</button>
          <button onClick={() => deleteBoard(board.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default BoardList;