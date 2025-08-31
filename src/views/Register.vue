<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import {getFieldRefsByForm} from "@/forms/getFieldRefsByForm";
import {buildSchema} from "@/forms/formHelper";
import type {RegisterDto} from "@/dtos/RegisterDto";


const fieldDefs = getFieldRefsByForm.register
const schema = buildSchema(fieldDefs)

async function onSubmit(values: RegisterDto) {
  console.log('Form submitted:', values)
}
</script>

<template>
  <div class="max-w-md mx-auto mt-10 border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
    <h2 class="text-2xl font-bold text-center mb-6 underline">Register</h2>

    <Form :validation-schema="schema" @submit="onSubmit" class="flex flex-col gap-4">

      <div v-for="f in fieldDefs" :key="f.name">
        <label :for="f.name" class="block text-sm font-medium text-gray-700">{{ f.label }}</label>
        <Field
            :name="f.name"
            :id="f.name"
            as="input"
            :type="f.type"
            class="mt-1 block w-full border rounded px-3 py-2"
            :placeholder="f.placeholder"
        />
        <ErrorMessage :name="f.name" class="text-sm text-red-500 mt-1" />
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Register
      </button>
    </Form>
  </div>
</template>