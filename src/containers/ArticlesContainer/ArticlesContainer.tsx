import React, { useEffect } from 'react';
import Articles from '../../components/Articles/Articles';
import Spinner from '../../components/UI/Spinner/Spinner';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import ArticleTagsSorter from '../../components/Articles/ArticleTagsSorter/ArticleTagsSorter';
import { useHistory } from 'react-router';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { initUsers } from '../../store/UserStore/action-creator/action-creator';
import { initPosts } from '../../store/PostStore/action-creator/action-creator';
import { initPhotos } from '../../store/PhotoStore/action-creator/action-creator';


const ArticlesContainer: React.FC = () => {
   const history = useHistory();
   const { users, photos, posts } = useTypedSelector(state => state)
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(initUsers());
      dispatch(initPosts());
      dispatch(initPhotos());
   }, []);

   const onClickButtonHandler = (id: number) => {
      history.push('/articles/' + id);
   }

   let articles = <><Sidebar>
      <ArticleTagsSorter />
   </Sidebar>
      <Articles
         posts={posts.posts}
         users={users.users}
         photos={photos.photos}
         onClickHandler={onClickButtonHandler}
      />
   </>;

   if (users.loading && posts.loading && photos.loading)
      articles = <Spinner />;

   if (users.error || posts.error || photos.error)
      articles = <h1>Что-то пошло не так :(</h1>;


   return (
      <>
         {articles}
      </>
   );
}


export default ArticlesContainer;