<script setup lang="ts">
import { ref } from 'vue'
import {apiClient} from "@/api/apiClient";

const username = ref('')
const email = ref('')
const password = ref('')
const message = ref('')
const error = ref('')

const api = new apiClient('https://localhost:5001')

async function register() {
  const dto: RegisterDto = {
    username: username.value,
    email: email.value,
    password: password.value
  }

  try {
    const res = await api.register(dto)
    message.value = res.message
    error.value = ''
  } catch (err: any) {
    error.value = err.response?.data || 'Registration failed'
    message.value = ''
  }
}
</script>

<template>
  <div>
    <h2>Register</h2>
    <input v-model="username" placeholder="Username" />
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="register">Register</button>
    <p v-if="message">{{ message }}</p>
    <p v-if="error" style="color:red">{{ error }}</p>
  </div>
</template>
