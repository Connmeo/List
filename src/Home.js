import React, { useState, useEffect } from 'react';

import { Articles } 

const Home = props => {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    const new_article = Articles();

    setArticle(new_article);
  }, []);

  const setNewtArticle = code => {
    setArticle('name');
  };

  return (
    <div className={id}>
      {articles.map(({ name }) => (
        <p>{article}</p>
      ))}
    </div>
  );
};

export default Home;
