import React from 'react';
import PostInterface from '../../../interfaces/PostInterface';
import UserInterface from '../../../interfaces/UserInterface';
import Button from '../../UI/Button/Button';
import './Article.scss';

type ArticleProps = {
   user: UserInterface | undefined,
   post: PostInterface,
}

const article: React.FC<ArticleProps> = props => {

   const { user, post } = props;

   return (
      <div className="article">
         <div className="article__author-info">
            <p className="article__author-name">{user?.name}</p>
            <p className="article__author-email">{user?.email}</p>
         </div>
         <div className="article__article-description">
            <h6 className="article__article-title">{post.title}</h6>
         </div>
         <div className="article__article-actions">
            <div className="article__article-info">
               <i className="far fa-heart"></i>
               <span className="article__article-counter">54</span>
               <i className="far fa-comments"></i>
               <span className="article__article-counter">24</span>
            </div>
            <div className="article__article-buttons">
               <Button>Подробнее</Button>
            </div>
         </div>
      </div>
   );
}


export default article;