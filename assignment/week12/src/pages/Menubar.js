import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const Bar = styled.div`
    width: 100%;
    height: 100px;
`
const Txt = styled.h2`
    margin-left: 20px;
`
const NaviContainer = styled.div`
`
const Navi = styled.div`
    color: black;
    text-decoration: none;
    //background-color: 
    font-size: 20px;
    font-weight: 600;
    padding: 10px 20px 10px 20px;
    border: 1.5px solid black;
    border-radius: 50px;
    width: fit-content;
    margin: 5px;
`

const Menubar = () => {
    return (
        <Bar>
            <Txt>To go ..</Txt>
            <NaviContainer>
                    <Link to="/surf" style={{ textDecoration: "none" }}><Navi>🏄🏻‍♂️ SurfPage</Navi></Link>

                    <Link to="/music" style={{ textDecoration: "none" }}><Navi>🎧 MusicPage</Navi></Link>
                </NaviContainer>
            <Outlet />
        </Bar>
    );
};

export default Menubar;