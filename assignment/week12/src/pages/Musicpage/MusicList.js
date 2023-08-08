import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Musicpage.css';

const MusicList = () => {
    const [music, setMusic] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/music')
        .then(response => {
            setMusic(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div>
            <ul class="list">
                {music.map(music => (
                    <div class="music-box">
                    <li key={music.id}>
                        <div class="cover">🎵</div>
                        <h2>{music.title}</h2>
                        <p>{music.singer}</p>
                        <p>{music.genre}</p>
                    </li>
                    <a href={music.url} id="url" ><div class="yt">▶︎</div></a>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default MusicList;