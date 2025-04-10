<!-- src/views/WelcomeView.vue -->
<template>
    <div class="welcome-container">
      <h1>🎉 ¡Bienvenido, usuario! 🎉</h1>
      <p>Gracias por iniciar sesión. ¡Que tengas un gran día!</p>
    </div>
  </template>
  <script>
</script>
  
  <style scoped>
  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    margin-top: 50px;
    background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
    border-radius: 20px;
    color: #333;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
  </style>
  