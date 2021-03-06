import React, { useCallback, useState } from 'react';
import { FormConfig } from '../../interfaces/InputInterface';
import Block from '../../components/UI/Block/Block';
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
      onSubmit: () => {
         console.log("email: " + form.inputs.email.value, "\npassword: " + form.inputs.password.value);
      },
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
         <Block single>
            <Form
               form={form}
               onChange={onChangeFormInputsHandler}
               title="Sign In Form"
               submitText="Sign In"
            />
         </Block>
      </>
   );
}


export default SignIn;