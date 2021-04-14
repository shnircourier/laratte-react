import React from 'react';
import './ArticleAuthor.scss';

type ArticleAuthorProps = {
   name?: string,
   email?: string
}

const articleAuthor: React.FC<ArticleAuthorProps> = props => {
   return (
      <div className="article-author">
         <p className="article-author__author-name">{props.name}</p>
         <p className="article-author__author-email">{props.email}</p>
      </div>
   );
}


export default articleAuthor;