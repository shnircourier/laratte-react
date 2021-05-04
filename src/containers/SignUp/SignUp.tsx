import React, { useState } from 'react';
import Block from '../../components/UI/Block/Block';
import Form from '../../components/UI/Form/Form';
import { FormConfig } from '../../interfaces/InputInterface';


const SignUp: React.FC = () => {

   const [form, setForm] = useState<FormConfig>({
      inputs: {
         name: {
            value: "",
            placeholder: "Enter your name",
            type: "text",
            label: "name",
            isClicked: false,
            valid: false
         },
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
         },
         repeatPassword: {
            value: "",
            type: "password",
            label: "repeat password",
            placeholder: "Repeat your password",
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
               title="Sign Up Form"
               submitText="Sign Up"
            />
         </Block>
      </>
   );
}


export default SignUp;