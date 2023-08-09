import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    background-color: #fff;
    width: 100%;
    height: 40vh;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 3vh;
`
const Title = styled.div`
    margin-left: 2vw;
    padding-top: 3vh;
    font-size: 20px;
    font-weight: bold;
`
const TextBox = styled.div`
    display: flex;
`
const Info = styled.div`
    padding-top: 3.5vh;
    font-size: 13px;
    font-weight: bold;
    margin-left: 1vw;
    color: #8C8C8C;
`
const PostBox = styled.div`
    display: flex;
    padding: 2vw;
    width: 100vw;
    overflow: auto;
    white-space: nowrap;
`
const Posting = styled.div`
    background-color: #fff;
    width: 33%;
    height: 20vh;
    padding: 2vw;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0,0,0,0.12);
    margin-right: 2vw;
`
const PostTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: #353535;
`
const PostContent = styled.div`
    margin-top: 20px;
    color: #8C8C8C;
    width: 33vw;
    height: 8vh;
    overflow: hidden;
`
const Comment = styled.button`
    margin-left: 22vw;
    margin-top: 4vh;
    padding: 8px;
    background-color: #fff;
    border-radius: 50px;
    border: 1px solid #D9E5FF;
    margin-right: 5px;
    color: #474747;
`
const Like = styled.button`
    padding: 8px;
    background-color: #fff;
    border-radius: 50px;
    border: 1px solid #D9E5FF;
    color: #474747;
`

function Post(props) {
    return (
        <Box>
            <TextBox>
                <Title>{props.title}</Title>
                <Info>{props.info}</Info>
            </TextBox>
            <PostBox>
                <Posting>
                    <PostTitle>어떻게 하면 서핑 잘 할 수 있나요</PostTitle>
                    <PostContent>이번에 처음해봤는데 너무 재밌었어요. 근데 일어나는 게 너무 어렵더라구요 ..<br/> 엎드려서 푸시하는 것까지는 잘 됩니다. 일어날 때 무게중심 유지하는 게 어려워서 
                    <br/>앞이나 뒤로 자꾸 넘어져요. 잘 일어나는 팁이 있나요?</PostContent>
                    <Comment>댓글 13개</Comment>
                    <Like>좋아요 30개</Like>
                </Posting>
                <Posting>
                    <PostTitle>7/28 서핑 같이 하실 분</PostTitle>
                    <PostContent>시흥 웨이브파크에서 같이 서핑하실 분 계신가요?<br/>저는 3번 정도 해본 초보자이고, 같이 배우면서 하실 초보자 구합니다.</PostContent>
                    <Comment>댓글 6개</Comment>
                    <Like>좋아요 14개</Like>
                </Posting>
                <Posting>
                    <PostTitle>8월 말 양양에서 같이 서핑해요 🌊</PostTitle>
                    <PostContent>잘 타시는 분, 처음이신 분 다 상관 없습니다.<br/>한 5분 정도 모이면 같이 날짜 잡고 놀러가요 ~~
                    <br/>저는 한 2박 3일 정도 생각하고 있고, 숙소는 에어비엔비로 예약할 예정입니당</PostContent>
                    <Comment>댓글 20개</Comment>
                    <Like>좋아요 29개</Like>
                </Posting>
            </PostBox>
        </Box>
    );
};

export default Post;