import React from 'react';
import './Button.scss';

type buttonProps = {
   type?: string
}

const button: React.FC<buttonProps> = props => {

   return (
      <button className="button"><span className="button__text">{props.children}</span></button>
   );
}


export default button;