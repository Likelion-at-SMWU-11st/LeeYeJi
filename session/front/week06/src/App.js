import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setInputs({
          ...inputs,
          [name]: value,
      });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
        id: 1,
        username: "sookmyung",
        email: "sookmyung@example.com",
        active: true,
    },
    {
        id: 2,
        username: "mutsa",
        email: "Likelionsmwu@example.com",
        active: false,
    },
    {
        id: 3,
        username: "yeji",
        email: "yeji@example.com",
        active: false,
    },
  ]);

  const nextId = useRef(4); // 파라미터에 넣은 4가 기본값
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => users.concat(user));

    setInputs({
      username:"",
      email:"",
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(
    (id) => {
    // user.ud가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // 즉, user.id가 id인 것을 제거함
    setUsers((users) => users.filter((user) => user.id !== id))
  },
  []
  );

  const onToggle = useCallback(
    (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? {...user, active: !user.active } : user
        )
    );
  },
  []
  );

  return (
    <>
    <CreateUser
    username={username}
    email={email}
    onChange={onChange}
    onCreate={onCreate}
    />
    <br />
    <hr />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
