import * as yup from 'yup'
import type {BaseFieldDef} from "@/forms/baseFieldDef";

const passwordFieldDef: BaseFieldDef = {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    rules: yup.string().required('Password is required'),
}

const emailFieldDef: BaseFieldDef = {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter email',
    rules: yup.string().email('Invalid email').required('Email is required'),
}

export const registerFields: ReadonlyArray<BaseFieldDef>
    = [
    emailFieldDef,
    passwordFieldDef,
    {
        name: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        placeholder: 'Confirm password',
        rules: yup
            .string()
            .oneOf([yup.ref('password')], 'Passwords must match')
            .required('Please confirm your password'),
    },
]

export const loginFields: ReadonlyArray<BaseFieldDef> = [
    emailFieldDef,
    passwordFieldDef,
]
