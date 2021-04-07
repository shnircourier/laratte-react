import React from 'react';
import PostInterface from '../../interfaces/PostInterface';
import UserInterface from '../../interfaces/UserInterface';
import Article from './Article/Article';
import ArticleSorter from './ArticleSorter/ArticleSorter';
import ArticleList from './ArticleList/ArticleList';
import Sidebar from '../UI/Sidebar/Sidebar';
import SideLinks from '../SideLinks/SideLinks';
import './Articles.scss';

type ArticlesProps = {
   posts: PostInterface[],
   users: UserInterface[]
}

const articles: React.FC<ArticlesProps> = props => {
   const { posts, users } = props;

   return (
      <div className="articles">
         <div className="articles__container">
            <ArticleSorter />
            {posts.map(post => <Article key={post.id}>
               <ArticleList
                  post={post}
                  user={users.find(user => user.id === post.userId)}
               />
            </Article>)}
         </div>
      </div>
   );
}


export default articles;