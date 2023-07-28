import './App.css';
import InlineButton from './InlineButton';
import ExternalButton from './ExternalButton';
import Logo from './Logo';
import LikeButton from './LikeButton';
import FunnyButton from './FunnyButton';

function App() {
  return (
    <>
      <Logo />
      {/* <h3>🦁 다양한 스타일링 방법으로 버튼을 만들어보자 🦁</h3>
        <InlineButton />
        <ExternalButton /> */}
        <h3>오늘 5주차 세미나 내용</h3>
        <p>오늘 프론트는 5주차 styled components!!</p>
        <LikeButton />
        <FunnyButton />
        <hr/>
        <h4>댓글</h4>
        <small>익명 1 완전 재밌을 것 같아요</small>
    </>
  );
}

export default App;
