import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Home } from './Home';

const App = () => {
  const [article, setArticle] = userState(null); //сюда передаем параметры, которые будем изменять
  return <Home id="home" setNewArticle={setNewArticle} />; //что конкретно нужно написать после "home"?
};

export default App;
