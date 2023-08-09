import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    border: 3px solid orange;
    margin: 5px;
    color: black;
    background: beige;
`;

const LikeButton = () => {
    return (
        <div>
            <StyledButton>👍🏻 좋아요</StyledButton>
        </div>
    );
};

export default LikeButton;