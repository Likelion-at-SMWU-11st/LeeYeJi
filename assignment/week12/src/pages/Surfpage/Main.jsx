import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    background-color: #4892EB;
    width: 100%;
    height: 50vh;
`
const MainText = styled.div`
    color: white;
    font-size: 5vh;
    margin-left: 5vw;
    font-weight: 700;
`
const SubText = styled.div`
    color: white;
    margin-left: 5vw;
    font-weight: bold;
    padding-top: 15vh;
`
const Search = styled.input`
    margin-top: 20px;
    margin-left: 5vw;
    width: 70vw;
    height: 8vh;
    border-radius: 50px;
    border: 0px;
    outline: none;
    padding-left: 2vw;
    font-size: 2.5vh;
    font-weight: 500;

    &::placeholder{
        color: #d9d9d9;
    }
`

const Main = () => {
    return (
        <Box>
            <SubText>서핑에 대한 모든 것을 알아볼 시간</SubText>
            <MainText>Surf the Surfing!</MainText>
            <Search type="text" placeholder='궁금한 점을 입력해주세요'/>
        </Box>
    );
};

export default Main;