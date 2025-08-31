import type {BaseFieldDef} from "@/forms/baseFieldDef";
import {getFieldRefsByForm} from "@/forms/getFieldRefsByForm";
import * as yup from "yup";

export type FormType = keyof typeof getFieldRefsByForm;

export function getFieldDefs<T extends FormType>(form: T) {
    return getFieldRefsByForm[form];
}

export function buildSchema(defs: ReadonlyArray<BaseFieldDef>) {
    return yup.object(Object.fromEntries(defs.map(f => [f.name, f.rules])));
}
