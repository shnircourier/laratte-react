import React from 'react';
import PostInterface from '../../interfaces/api/PostInterface';
import UserInterface from '../../interfaces/api/UserInterface';
import Article from '../UI/Block/Block';
import ArticleSorter from './ArticleSorter/ArticleSorter';
import ArticleList from './Article/ArticleList/ArticleList';
import './Articles.scss';
import PhotoInterface from '../../interfaces/api/PhotoInterface';

type ArticlesProps = {
   posts: PostInterface[],
   users: UserInterface[],
   photos: PhotoInterface[],
   onClickHandler: (id: number) => void
}

const articles: React.FC<ArticlesProps> = props => {
   const { posts, users, onClickHandler, photos } = props;

   return (
      <div className="articles">
         <div className="articles__container">
            <ArticleSorter />
            {posts.map((post, index) => <Article key={post.id}>
               <ArticleList
                  withImg={index === 0}
                  post={post}
                  user={users.find(user => user.id === post.userId)}
                  photo={photos.find(photo => photo.id === post.userId)}
                  onClickHandler={onClickHandler}
               />
            </Article>)}
         </div>
      </div>
   );
}


export default articles;