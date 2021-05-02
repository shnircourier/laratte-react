import React, { useCallback, useState } from 'react';
import { FormConfig } from '../../interfaces/InputInterface';
import Form from '../../components/UI/Form/Form';


const SignIn: React.FC = () => {

   const [form, setForm] = useState<FormConfig>({
      inputs: {
         email: {
            value: "",
            placeholder: "Enter your E-mail",
            type: "email",
            label: "e-mail",
            isClicked: false,
            valid: false,
         },
         password: {
            value: "",
            type: "password",
            label: "password",
            placeholder: "Enter your password",
            isClicked: false,
            valid: false
         }
      },
      onSubmit: (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault() },
      valid: false
   });


   const onChangeFormInputsHandler = (e: React.FormEvent<HTMLInputElement>, key: string) => {

      const inputValue = e.currentTarget.value;
      
      setForm(prev => {
         console.log(inputValue, key);
         return {
            ...prev,
            inputs: {
               ...prev.inputs,
               [key]: {
                  ...prev.inputs[key],
                  value: inputValue
               }
            }
         };
      });

   }




   return (
      <>
         <Form form={form} onChange={onChangeFormInputsHandler} />
      </>
   );
}


export default SignIn;