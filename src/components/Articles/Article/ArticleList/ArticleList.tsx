import React from 'react';
import PhotoInterface from '../../../../interfaces/api/PhotoInterface';
import PostInterface from '../../../../interfaces/api/PostInterface';
import UserInterface from '../../../../interfaces/api/UserInterface';
import Button from '../../../UI/Button/Button';
import ArticleAuthor from '../ArticleAuthor/ArticleAuthor';
import ArticleImage from '../ArticleImage/ArticleImage';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import './ArticleList.scss';

type ArticleProps = {
   user?: UserInterface,
   post: PostInterface,
   photo?: PhotoInterface,
   withImg: boolean
   onClickHandler: (id: number) => void
}

const articleList: React.FC<ArticleProps> = props => {

   const { user, post, photo, withImg } = props;

   return (
      <>
         {withImg ? <ArticleImage imgUrl={photo?.url} /> : null}
         <div className="article-list">
            <ArticleAuthor email={user?.email} name={user?.name} photo={photo?.thumbnailUrl} />
            <ArticleTitle title={post.title} />
            <div className="article-list__article-list-actions">
               <div className="article-list__article-list-info">
                  <i className="far fa-heart"></i>
                  <span className="article-list__article-list-counter">54</span>
                  <i className="far fa-comments"></i>
                  <span className="article-list__article-list-counter">24</span>
               </div>
               <div className="article-list__article-list-buttons">
                  <Button onClickHandler={() => props.onClickHandler(post.id)}>Read</Button>
               </div>
            </div>
         </div>
      </>
   );
}


export default articleList;