import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


const CreateBoard = () => {
    const [newBoardTitle, setNewBoardTitle] = useState('');
    const [newBoardContent, setNewBoardContent] = useState('');
    
    const createBoard = () => {
        axios.post('http://127.0.0.1:8000/board/', {title: newBoardContent, content: newBoardContent})
        .then(response => {
            setNewBoardTitle('');
            setNewBoardContent('');
        })
        .catch(error => {
            console.error('Error creating boards: ', error);
        });
    };
  return (
    <div className='Board-card'>
        <h2>방명록 작성</h2>
        <div>
            <input
                placeholder='이름'
                value={newBoardTitle}
                onChange={e => setNewBoardTitle(e.target.value)}
                />
            <textarea
                placeholder='내용'
                value={newBoardContent}
                onChange={e => setNewBoardContent(e.target.value)}
            />
        </div>
        <button onClick={createBoard}>작성</button>
    </div>

  )
}

export default CreateBoard