import React from 'react';
import './Article.scss';

type articleProps = {
   single?: boolean
}

const article: React.FC<articleProps> = props => {

   const classes = ["article"];

   if (props.single)
      classes.push("article_single");

   return (
      <div className={classes.join(' ')}>
         {props.children}
      </div>
   );
}


export default article;