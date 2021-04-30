import React from 'react';
import { FormConfig } from '../../../interfaces/InputInterface';
import Input from './Input/Input';

type FormPropsType = {
   form: FormConfig
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
                  {formInputs.map(input => <Input key={input.name} {...input} />)}
               </form>
            </div>
         </div>
      </>
   );
}


export default form;