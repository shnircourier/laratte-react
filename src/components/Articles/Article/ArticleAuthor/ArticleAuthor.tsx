import React from 'react';
import './ArticleAuthor.scss';

type ArticleAuthorProps = {
   name?: string,
   email?: string,
   photo?: string
}

const articleAuthor: React.FC<ArticleAuthorProps> = props => {
   return (
      <div className="article-author">
         <img src={props.photo} alt="" />
         <div className="article-author__text-block">
            <p className="article-author__author-name">{props.name}</p>
            <p className="article-author__author-email">{props.email}</p>
         </div>
      </div>
   );
}


export default articleAuthor;