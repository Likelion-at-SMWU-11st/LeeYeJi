import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const Bar = styled.div`
`

const Menubar = () => {
    return (
        <Bar>
            <ul>
                <li>
                    <Link to="/surf">SurfPage</Link>
                </li>
            </ul>
            <Outlet />
        </Bar>
    );
};

export default Menubar;