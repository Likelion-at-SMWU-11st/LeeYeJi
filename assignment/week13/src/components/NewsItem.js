import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;

    img {
			margin-top: 0.3rem;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
        font-size: 1.25rem;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      font-size: 1rem;
    }
  }

  & + & { // 어떤 항목 사이의 여백을 주고 싶을 때
    margin-top: 3rem;
  }
`;

{/* 아래부터 작성해 주세요! */}
const NewsItem = ({article}) => {
    const {title, description, url, urlToImage } = article;
  return(
    <NewsItemBlock>
        {urlToImage && (
            <div className='thumbnail'>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                    <img src={urlToImage} alt='thumbname'/>
                </a>
            </div>
        )}
        <div className='contents'>
            <h2>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                    {title}
                </a>
            </h2>
            <p>{description}</p>
        </div>
    </NewsItemBlock>
  );
};

export default NewsItem;