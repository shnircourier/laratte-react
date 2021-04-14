import React from 'react';
import './Button.scss';

type buttonProps = {
   type?: string,
   onClickHandler: (id?: number) => void
}

const button: React.FC<buttonProps> = props => {

   return (
      <button onClick={() => props.onClickHandler()} className="button"><span className="button__text">{props.children}</span></button>
   );
}


export default button;