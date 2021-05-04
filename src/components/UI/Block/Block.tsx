import React from 'react';
import './Block.scss';

export enum Width {
   AUTO = 'AUTO',
   FULL = 'FULL',
   HALF = 'HALF'
}

type articleProps = {
   single?: boolean,
   width?: Width
}

const article: React.FC<articleProps> = props => {

   const classes = ["block"];

   if (props.single)
      classes.push("block_single");

   switch (props.width) {
      case Width.AUTO:
         classes.push("block_autoWidth");
         break;
      case Width.FULL:
         classes.push("block_fullWidth");
         break;
      case Width.HALF:
         classes.push("block_halfWidth");
         break;
      default:
         classes.push("block_autoWidth");
         break;
   }


   return (
      <div className={classes.join(' ')}>
         {props.children}
      </div>
   );
}


export default article;