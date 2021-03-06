import React, { useState, useEffect, useContext } from 'react';

import getNews from '../../api/articles';

import ShowArticle from '../../components/showArticle';
import ChangePage from '../../components/changePage';

import HomeContext from '../../context/homeContext';

export default function Home() {
  const [articles, setArticles] = useState([]);

  const { start } = useContext(HomeContext);

  useEffect(() => {
    getNews('', { _limit: 5, _start: start })
      .then((response) => setArticles(response.data));

    window.scrollTo(0, 0);
  }, [start]);

  const ListArticles = articles.map((item) => <ShowArticle key={item.id} article={item} />);

  return (
    <>
      <h1>Articles</h1>
      {ListArticles}
      <ChangePage />
    </>
  );
}
