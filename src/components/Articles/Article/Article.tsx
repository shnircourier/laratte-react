import React from 'react';
import './Article.scss';

type articleProps = {
   marginTop?: boolean
}

const article: React.FC<articleProps> = props => {

   const classes = ["article"];

   if (props.marginTop)
      classes.push("article_margin_top");

   return (
      <div className={classes.join(' ')}>
         {props.children}
      </div>
   );
}


export default article;