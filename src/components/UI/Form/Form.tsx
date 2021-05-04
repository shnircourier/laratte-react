import React from 'react';
import { FormConfig } from '../../../interfaces/InputInterface';
import Input from './Input/Input';
import Button from '../../UI/Button/Button';
import './Form.scss';

type FormPropsType = {
   form: FormConfig,
   title?: string,
   submitText?: string,
   onChange: (e: React.FormEvent<HTMLInputElement>, key: string) => void
}

const form: React.FC<FormPropsType> = props => {

   const { inputs, onSubmit, valid } = props.form;

   let formInputs = [];

   for (const key in inputs) {
      formInputs.push({
         name: key,
         ...inputs[key]
      });
   }

   return (
      <>
         <div className="form-container">
            {props.title ?
               <h4 className="form-container__title">
                  {props.title}
               </h4>
               : null}
            <div className="form-container__form">
               <form>
                  {formInputs.map(input => <Input
                     key={input.name}
                     {...input}
                     onChange={props.onChange} />)}
                  <Button onClickHandler={(e: React.FormEvent<HTMLFormElement>) => { onSubmit() }}>
                     {props.submitText ? props.submitText : "Submit"}
                  </Button>
               </form>
            </div>
         </div>
      </>
   );
}


export default form;