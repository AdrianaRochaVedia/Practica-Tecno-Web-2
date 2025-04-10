<template>
    <div class="login-page">
      <div class="login-container">
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <label for="username">Usuario:</label>
            <input v-model="username" type="text"  id="username" name="username" />
          </div>
          <div class="input-group">
            <label for="password">Contraseña:</label>
            <input v-model="password" type="password"  id="password" name="password" />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
  
        <p class="register-prompt">
          ¿No tienes una cuenta?
          <router-link to="/register">Regístrate</router-link>
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

    const handleLogin = async () => {
        if (!username.value || !password.value) {
            alert('Debes llenar ambos campos')
            return
        }
        console.log("datos pal back user", username.value)
        console.log("datos pal back PASS", password.value)
        try {
            await authStore.login(username.value, password.value)
        } catch (e) {
            alert('Error al loguarse: ' + (e.response?.data?.errors?.[0]?.msg || 'Datos inválidos'))
        }
        }
</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  
  .login-page {
    height: 100vh;
    background: linear-gradient(135deg, #74ebd5, #9face6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
  }
  
  .login-container {
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
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #357ab8;
  }
  
  .register-prompt {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #555;
  }
  
  .register-prompt a {
    color: #4a90e2;
    text-decoration: none;
    font-weight: 600;
  }
  
  .register-prompt a:hover {
    text-decoration: underline;
  }
  </style>
  