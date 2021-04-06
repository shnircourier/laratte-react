import React, { useEffect, useState } from 'react';
import Articles from '../../components/Articles/Articles';
import PostInterface from '../../interfaces/PostInterface';
import UserInterface from '../../interfaces/UserInterface';
import Spinner from '../../components/UI/Spinner/Spinner';


const ArticlesContainer: React.FC = () => {
   const [posts, setPosts] = useState<PostInterface[]>([]);
   const [users, setUsers] = useState<UserInterface[]>([]);

   let articles = <Spinner />

   if (posts.length !== 0 && users.length !== 0)
      articles = <Articles
         posts={posts}
         users={users}
      />;

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json() as Promise<UserInterface[]>)
         .then(data => setUsers(data));
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then(res => res.json() as Promise<PostInterface[]>)
         .then(data => setPosts(data));
   }, []);

   return (
      <>
         {articles}
      </>
   );
}


export default ArticlesContainer;