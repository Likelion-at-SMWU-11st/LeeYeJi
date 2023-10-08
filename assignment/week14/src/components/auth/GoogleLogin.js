import React, { useState } from 'react';
import styled from "styled-components";
import { firebaseAuth } from '../../fbase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
    const [userData, setUserData] = useState(null);
    const onSocialClick = async () => {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        await signInWithPopup(firebaseAuth, provider) //popup을 이용한 signup
            .then((data) => {
                setUserData(data.user); // user data 설정 (추후에 user를 넘겨줘야할 때 사용)
                console.log(data); // console로 들어온 데이터 표시
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <Container>
            <GoogleBtn onClick={onSocialClick}>
                <FcGoogle/>
            </GoogleBtn>
        </Container>
    );
};

export default GoogleLogin;

const Container = styled.div`
    text-align: center;
`;
const GoogleBtn = styled.div`
    border-radius: 50%;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
    padding: 0.7rem;
    width: fit-content;
    margin: auto;
    &:hover {
        background: #f2f2f2;
        cursor: pointer;
    };
`;