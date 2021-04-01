import React from 'react';
import PostInterface from '../../interfaces/PostInterface';
import UserInterface from '../../interfaces/UserInterface';
import Article from './Article/Article';
import './Articles.scss';

type ArticlesProps = {
   posts: PostInterface[],
   users: UserInterface[]
}

const articles: React.FC<ArticlesProps> = props => {
   const { posts, users } = props;

   return (
      <div className="articles">
         {posts.map(post => <Article
            key={post.id}
            post={post}
            user={users.find(user => user.id === post.userId)} />)}
      </div>
   );
}


export default articles;