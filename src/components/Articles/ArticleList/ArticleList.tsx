import React from 'react';
import PostInterface from '../../../interfaces/PostInterface';
import UserInterface from '../../../interfaces/UserInterface';
import Button from '../../UI/Button/Button';
import './ArticleList.scss';

type ArticleProps = {
   user?: UserInterface,
   post?: PostInterface,
}

const articleList: React.FC<ArticleProps> = props => {

   const { user, post } = props;

   return (
      <div className="article-list">
         <div className="article-list__author-info">
            <p className="article-list__author-name">{user?.name}</p>
            <p className="article-list__author-email">{user?.email}</p>
         </div>
         <div className="article-list__article-list-description">
            <h6 className="article-list__article-list-title">{post?.title}</h6>
         </div>
         <div className="article-list__article-list-actions">
            <div className="article-list__article-list-info">
               <i className="far fa-heart"></i>
               <span className="article-list__article-list-counter">54</span>
               <i className="far fa-comments"></i>
               <span className="article-list__article-list-counter">24</span>
            </div>
            <div className="article-list__article-list-buttons">
               <Button>Read</Button>
            </div>
         </div>
      </div>
   );
}


export default articleList;