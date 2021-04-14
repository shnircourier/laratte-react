import React, { useEffect, useState } from 'react';
import Articles from '../../components/Articles/Articles';
import PostInterface from '../../interfaces/PostInterface';
import UserInterface from '../../interfaces/UserInterface';
import Spinner from '../../components/UI/Spinner/Spinner';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import ArticleTagsSorter from '../../components/Articles/ArticleTagsSorter/ArticleTagsSorter';
import { useHistory } from 'react-router';


const ArticlesContainer: React.FC = () => {
   const [posts, setPosts] = useState<PostInterface[]>([]);
   const [users, setUsers] = useState<UserInterface[]>([]);
   const history = useHistory();

   const onClickButtonHandler = (id?: number) => {
      if (id)
         history.push('/articles/' + id);
   }

   let articles = <Spinner />

   if (posts.length !== 0 && users.length !== 0)
      articles = <>
         <Sidebar>
            <ArticleTagsSorter />
         </Sidebar>
         <Articles
            posts={posts}
            users={users}
            onClickHandler={onClickButtonHandler}
         />
      </>;

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