import React from 'react';
import { InputInterface } from '../../../../interfaces/InputInterface';
import './Input.scss';

interface InputPropsType extends InputInterface {
   name: string,
   onChange: (e: React.FormEvent<HTMLInputElement>, key: string) => void
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
            onChange={(e: React.FormEvent<HTMLInputElement>) => props.onChange(e, props.name)}
         />
      </div>
   );
}


export default input;