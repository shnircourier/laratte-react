import React from 'react';

type ArticleImageProps = {
   imgUrl?: string
}

const articleImage: React.FC<ArticleImageProps> = props => {
   return (
      <div className="article-image">
         <img src={props.imgUrl} alt="" />
      </div>
   );
}


export default articleImage;