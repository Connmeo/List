import React, { useState ,useEffect} from 'react';

import {Articles } from './Articles';

const Home = ({ id, setNewtArticle }) = > { //Почему тут выдает ошибку?
    const [articles, setArticle] = useState([]);
    
    useEffect(()=> {
        const new_article =Arricles();

        setArticle(new_article);

    }, []);

    const setNewtArticle = code => { //что тут значит code?
    setArticle(code);
    };

    return (
        <div className={id}>
{articles.map(({name}) => 
        <p>{article>}</p>
        )
        }
        
        </div>
    )
}

export default Home;