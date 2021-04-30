import React from 'react';
import { InputInterface } from '../../../../interfaces/InputInterface';
import './Input.scss';

interface InputPropsType extends InputInterface {
   name: string
}

const input: React.FC<InputPropsType> = props => {



   return (
      <div className="form__control">
         {props.label ? <label htmlFor="">{props.label}</label> : null}
         <input
            className="form__input"
            type={props.type}
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
         />
      </div>
   );
}


export default input;