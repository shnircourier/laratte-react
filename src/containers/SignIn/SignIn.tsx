import React, { useState } from 'react';
import { FormConfig } from '../../interfaces/InputInterface';



const SignIn: React.FC = () => {

   const [form, setForm] = useState<FormConfig>({
      inputs: {
         email: {
            value: "",
            placeholder: "Enter your E-mail",
            type: "email",
            label: "e-mail",
            isClicked: false,
            valid: false
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
      setForm(prev => {
         return {
            ...prev,
            inputs: {
               ...prev.inputs,
               [key]: {
                  ...prev.inputs[key],
                  value: e.currentTarget.value
               }
            }
         };
      });
   }


   return (
      <>

      </>
   );
}


export default SignIn;