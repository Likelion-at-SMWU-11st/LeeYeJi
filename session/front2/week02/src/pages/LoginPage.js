import React, {useState} from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import {
    firebaseAuth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from "../fbase";

const LoginPage = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
                firebaseAuth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            alert("로그인 완료!");
            // if (!user.user.emailVerified) {
            //     alert("이메일 인증을 해주세요.");
            // } else {
            //     window.location.replace("/");
            // }
        } catch (error) {
            console.log(error.message);
            alert("이메일 또는 비밀번호가 일치하지 않습니다.");
        }
    };

    return (
        <AuthTemplate>
            <AuthFormBlock>
                <h3>로그인</h3>
                <form>
                    <StyledInput 
                        type="email"
                        placeholder="이메일"
                        value={loginEmail}
                        onChange={(e) => {
                            setLoginEmail(e.target.value);
                        }}/>
                    <StyledInput 
                        type="password" 
                        placeholder="비밀번호"
                        value={loginPassword}
                        onChange={(e) => {
                            setLoginPassword(e.target.value);
                        }}/>
                    <ButtonWithMarginTop green fullWidth onClick={signIn}>로그인</ButtonWithMarginTop>
                </form>
                <Footer>
                    <Link to="/register">회원가입</Link>
                </Footer>
            </AuthFormBlock>
        </AuthTemplate>
    );
};

export default LoginPage;

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${palette.gray[6]};
        text-decoration: underline;
        &:hover {
            color: ${palette.gray[9]}
        }
    }
`;

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;