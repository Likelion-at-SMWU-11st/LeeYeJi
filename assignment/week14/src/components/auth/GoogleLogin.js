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
const GoogleBtn = styled.div``;