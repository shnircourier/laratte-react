import React from 'react';
import './ArticleTitle.scss';

type ArticleTitle = {
   title?: string
}

const articleTitle: React.FC<ArticleTitle> = props => {
   return (
      <div className="article-title">
         <h6 className="article-title__title">{props.title}</h6>
      </div>
   );
}


export default articleTitle;