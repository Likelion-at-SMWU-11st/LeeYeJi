import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    width: 100%;
    height: 8vh;
    background-color: #fff;
    border-bottom: solid 1px #d9d9d9;
    position: fixed;
    box-shadow: 0 1px 10px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    display: flex;
    top: 0;
`
const Title = styled.div`
    color: #266BEB;
    margin-left: 2vw;
    font-size: 2vw;
    font-weight: 700;
    margin-top: 1.5vh;
    margin-right: 2vw;
`
const Menu = styled.div`
    margin: 2.5vh 2vw 2vw;
    font-size: 1vw;
    font-weight: 500;
`
const Text = styled.div`
    margin-left: 60vw;
    margin-top: 2.7vh;
    font-size: 15px;
    color: #5B5D5A;
`

const TopBar = () => {
    return (
        <Bar>
            <Title>Surf.</Title>
            <Menu>Beginner</Menu>
            <Menu>Master</Menu>
            <Menu>Together</Menu>
            <Text>로그인/회원가입</Text>
        </Bar>
    );
};

export default TopBar;