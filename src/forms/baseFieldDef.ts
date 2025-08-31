import * as yup from "yup";

export type BaseFieldDef = {
    name: string
    label: string
    type: string
    placeholder?: string
    rules: yup.AnySchema
}