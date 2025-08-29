<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

// Define validation schema
const schema = yup.object({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required(),
  confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Please confirm your password')
})

// Handle form submission
function onSubmit(values: Record<string, string>) {
  console.log('Form submitted:', values)
  alert('Registration successful!')
}
</script>

<template>
  <div class="max-w-md mx-auto mt-10 border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
    <h2 class="text-2xl font-bold text-center mb-6 underline">Register</h2>

    <Form :validation-schema="schema" @submit="onSubmit" class="flex flex-col gap-4">
      <!-- Username -->
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <Field name="username" id="username" as="input" class="mt-1 block w-full border rounded px-3 py-2" placeholder="Enter username" />
        <ErrorMessage name="username" class="text-sm text-red-500 mt-1" />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <Field name="email" id="email" as="input" type="email" class="mt-1 block w-full border rounded px-3 py-2" placeholder="Enter email" />
        <ErrorMessage name="email" class="text-sm text-red-500 mt-1" />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <Field name="password" id="password" as="input" type="password" class="mt-1 block w-full border rounded px-3 py-2" placeholder="Enter password" />
        <ErrorMessage name="password" class="text-sm text-red-500 mt-1" />
      </div>

      <div>
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
        <Field name="confirmPassword" id="confirmPassword" as="input" type="password" class="mt-1 block w-full border rounded px-3 py-2" placeholder="Confirm password" />
        <ErrorMessage name="confirmPassword" class="text-sm text-red-500 mt-1" />
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Register
      </button>
    </Form>
  </div>
</template>
