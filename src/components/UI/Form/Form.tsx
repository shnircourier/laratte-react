import React, { useEffect } from 'react';
import { FormConfig } from '../../../interfaces/InputInterface';
import Input from './Input/Input';

type FormPropsType = {
   form: FormConfig,
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
            <div className="form-container__title">

            </div>
            <div className="form-container__form">
               <form action="">
                  {formInputs.map(input => <Input
                     key={input.name}
                     {...input}
                     onChange={props.onChange} />)}
               </form>
            </div>
         </div>
      </>
   );
}


export default form;