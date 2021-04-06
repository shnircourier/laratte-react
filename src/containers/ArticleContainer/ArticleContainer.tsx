import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PhotoInterface from '../../interfaces/PhotoInterface';
import PostInterface from '../../interfaces/PostInterface';
import UserInterface from '../../interfaces/UserInterface';
import Article from '../../components/Articles/Article/Article';

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

   return (
      <Article marginTop>
         
      </Article>
   );
}


export default ArticleContainer;