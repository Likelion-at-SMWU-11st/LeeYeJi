import React from 'react';

const btnStyle = {
    color: "black",
    background: "pink",
    border: "1px solid pink",
    borderRadius: "15rem",
    padding: "15px 15px",
    fontSize: "20px",
}

const InlineButton = () => {
    return (
        <button style={btnStyle}>Inline Button</button>
    );
};

export default InlineButton;