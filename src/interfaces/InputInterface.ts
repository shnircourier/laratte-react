import { FormEvent } from "react";


export interface InputInterface {
   label?: string,
   value: string,
   placeholder?: string,
   type: string,
   isClicked: boolean,
   valid: boolean
}

export interface Inputs {
   [key: string]: InputInterface
}

export interface FormConfig {
   valid: boolean,
   onSubmit: (e: FormEvent<HTMLFormElement>) => void,
   inputs: Inputs
}