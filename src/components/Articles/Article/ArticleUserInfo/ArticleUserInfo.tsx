import React from 'react';
import UserInterface from '../../../../interfaces/api/UserInterface';
import './ArticleUserInfo.scss';

type ArticleUserInfoType = {
   photo?: string,
   user?: UserInterface
}

const articleUserInfo: React.FC<ArticleUserInfoType> = props => {
   return (
      <div className="article-user-info">
         <div className="article-user-info__header-line"></div>
         <div className="article-user-info__container">
            <div className="article-user-info__header">
               <img src={props.photo} alt="" />
               <h4>{props.user?.username}</h4>
            </div>
            <div className="article-user-info__info-row">
               <span>Full name:</span>
               <p>{props.user?.name}</p>
            </div>
            <div className="article-user-info__info-row">
               <span>E-mail:</span>
               <p>{props.user?.email}</p>
            </div>
            <div className="article-user-info__info-row">
               <span>Company:</span>
               <p>{props.user?.company?.name}</p>
            </div>
            <div className="article-user-info__info-row">
               <span>Website:</span>
               <p>{props.user?.website}</p>
            </div>
         </div>
      </div>
   );
}


export default articleUserInfo;