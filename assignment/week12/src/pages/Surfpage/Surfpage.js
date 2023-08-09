import TopBar from './TopBar';
import Main from './Main';
import Post from './Post';

function Surfpage() {
  return (
    <>
      <TopBar />
      <Main />
      <Post title="지금 핫한 글 ☀️" info="서핑 트렌드 보기"/>
      <Post title="Beginner 🏄🏻‍♀️" info="서핑 입문하기"/>
      <Post title="Master 🏄🏻" info="서핑 고수들의 정보 방출"/>
      <Post title="Together 🏄🏻‍♂️" info="함께 서핑하기"/>
    </>
  );
}

export default Surfpage;