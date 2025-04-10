import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null
  }),
  actions: {
    async register(username, password) {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/register', {
          username,
          password
        })
        console.log('Usuario registrado:', response.data)
      } catch (error) {
        console.error('Error al registrar:', error.response?.data || error)
        throw error
      }
    },
    // authStore.js
async login(username, password1) {
    try {
      // Log para ver los datos enviados
      console.log('Datos enviados para login:', { username, password1 });
  
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        username,
        password1
      });
  
      // Log para ver la respuesta completa
      console.log('Respuesta del backend:', response);
  
      // Si el login es exitoso, guardamos el token y el usuario
      this.user = username;
      this.token = response.data.token;
  
      console.log('Token recibido:', this.token);
  
    } catch (error) {
      // Log para ver el error completo
      console.error('Error al iniciar sesión:', error.response?.data || error);
  
      // Lanza el error para manejarlo en el componente
      throw error;
    }
  }
  
  }
})
