<template>
    <div class="register-page">
      <div class="register-container">
        <h2>Registro</h2>
        <form @submit.prevent="handleRegister">
          <div class="input-group">
            <label for="username">Usuario:</label>
            <input v-model="username" type="text" id="username" name="username" />
          </div>
          <div class="input-group">
            <label for="password">Contraseña:</label>
            <input v-model="password" type="password" id="password" name="password" />
          </div>
          <button type="submit">Registrarse</button>
        </form>
        <p class="login-prompt">
        ¿Ya tienes una cuenta?
        <router-link to="/login">Inicia sesión</router-link>
      </p>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/authStore'

const username = ref('')
const password = ref('')
const authStore = useAuthStore()

const handleRegister = async () => {
  if (!username.value || !password.value) {
    alert('Debes llenar ambos campos')
    return
  }

  try {
    await authStore.register(username.value, password.value)
  } catch (e) {
    alert('Error al registrarse: ' + (e.response?.data?.errors?.[0]?.msg || 'Datos inválidos'))
  }
}
</script>

  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  
  .register-page {
    height: 100vh;
    background: linear-gradient(135deg, #fbc2eb, #a6c1ee);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
  }
  
  .register-container {
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  h2 {
    margin-bottom: 1.5rem;
    font-weight: 600;
    color: #333;
  }
  
  .input-group {
    text-align: left;
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 500;
  }
  
  input {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.7rem 1.5rem;
    background-color: #ff69b4;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #d4579c;
  }
  
  .login-prompt {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #555;
  }
  
  .login-prompt a {
    color: #ff69b4;
    text-decoration: none;
    font-weight: 600;
  }
  
  .login-prompt a:hover {
    text-decoration: underline;
  }
  </style>
  