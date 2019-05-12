import React, { useState } from 'react';

import { Home }


const App = ({}) => {
  const [article, setArticle] = useState(null); 
  return (
  <Home id='home' setNewArticle={setNewArticle} /> )
  
};

export default App;
