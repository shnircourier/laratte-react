import React from 'react';
import './ArticleContent.scss';

type ArticleContentProps = {
   text?: string
}

const articleContent: React.FC<ArticleContentProps> = props => {
   return (
      <div className="article-content">
         {props.children}
         <div className="article-content__container">
            {props.text}
         </div>
      </div>
   );
}


export default articleContent;