import {loginFields, registerFields} from "@/forms/auth/authFieldDefs";
import type {BaseFieldDef} from "@/forms/baseFieldDef";

function createRegistry<T extends Record<string, ReadonlyArray<BaseFieldDef>>>(map: T) {
    return map;
}

export const getFieldRefsByForm = createRegistry({
    register: registerFields,
    login: loginFields,
} as const);