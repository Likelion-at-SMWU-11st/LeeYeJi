import React, { useState } from 'react';
import Categories from './Categories';
import NewsList from './NewsList';
import { useParams } from 'react-router-dom';

{/* 아래부터 작성해 주세요! */}
const NewsPage = () => {
    const {category} = useParams();
    const [selectedCategory, setSlectedCategory] = useState(category || 'all');

    const handleCategorySelect = (newCategory) => {
        setSlectedCategory(newCategory);
    }
  return (
    <>
        <Categories onSelect={handleCategorySelect} />
        <NewsList category={selectedCategory} />
    </>
  );
};

export default NewsPage;