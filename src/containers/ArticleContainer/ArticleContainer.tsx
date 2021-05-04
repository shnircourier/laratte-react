import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PhotoInterface from '../../interfaces/api/PhotoInterface';
import PostInterface from '../../interfaces/api/PostInterface';
import UserInterface from '../../interfaces/api/UserInterface';
import Spinner from '../../components/UI/Spinner/Spinner';
import Article, { Width } from '../../components/UI/Block/Block';
import ArticleImage from '../../components/Articles/Article/ArticleImage/ArticleImage';
import ArticleContent from '../../components/Articles/Article/ArticleContent/ArticleContent';
import ArticleTitle from '../../components/Articles/Article/ArticleTitle/ArticleTitle';
import ArticleAuthor from '../../components/Articles/Article/ArticleAuthor/ArticleAuthor';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import ArticleStats from '../../components/Articles/Article/ArticleStats/ArticleStats';
import ArticleUserInfo from '../../components/Articles/Article/ArticleUserInfo/ArticleUserInfo';

type RouteParams = {
   id: string
}

const ArticleContainer: React.FC = () => {

   const [post, setPost] = useState<PostInterface>();
   const [user, setUser] = useState<UserInterface>();
   const [photo, setPhoto] = useState<PhotoInterface>();
   const { id } = useParams<RouteParams>();


   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then(res => res.json() as Promise<PostInterface>)
         .then(data => {
            setPost(data);
            fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
               .then(res => res.json() as Promise<UserInterface>)
               .then(data => setUser(data));
            fetch(`https://jsonplaceholder.typicode.com/photos/${data.userId}`)
               .then(res => res.json() as Promise<PhotoInterface>)
               .then(data => setPhoto(data));
         });
   }, []);

   let article = <Spinner />;

   if (post && user && photo) {
      article = <>
         <Sidebar>
            <ArticleStats />
         </Sidebar>
         <Article width={Width.FULL} single>
            <ArticleImage imgUrl={photo?.url} />
            <ArticleContent text={post?.body}>
               <ArticleTitle title={post?.title} />
               <ArticleAuthor name={user?.name} email={user?.email} photo={photo.thumbnailUrl} />
            </ArticleContent>
         </Article>
         <ArticleUserInfo photo={photo.thumbnailUrl} user={user} />
      </>
   }

   return (
      <>
         {article}
      </>
   );
}


export default ArticleContainer;