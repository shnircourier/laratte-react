import React from 'react';
import './Button.scss';

type buttonProps = {
   type?: string,
   disabled?: boolean,
   onClickHandler: (data?: any) => void
}

const button: React.FC<buttonProps> = props => {

   return (
      <button
         onClick={() => props.onClickHandler()}
         className="button"
         disabled={props.disabled}
      >
         <span className="button__text">{props.children}</span>
      </button>
   );
}


export default button;