<template>
    <header class="app-header">
      <div class="logo">
        <i class="pi pi-pencil"></i>
        <span>My blog</span>
      </div>
      <nav>
        <!--<ul>
          <li><i class="pi pi-home"></i> Inicio</li>
          <li><i class="pi pi-book"></i> Artículos</li>
          <li><i class="pi pi-user"></i> Sobre mí</li>
          <li @click="toggleDarkMode">
            <i :class="darkMode ? 'pi pi-sun' : 'pi pi-moon'"></i>
            {{ darkMode ? 'Modo Claro' : 'Modo Oscuro' }}
          </li>
        </ul>-->
      </nav>
    </header>
  </template>

  <script setup>
  import { ref } from 'vue';

  const darkMode = ref(false);

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    document.body.classList.toggle('dark-mode', darkMode.value);
  };;
  </script>

  <style scoped>
  .app-header {
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--blur-bg); /* Fondo transparente con color dinámico */
    backdrop-filter: blur(10px); /* Efecto de desenfoque */
    color: var(--text-color);
    z-index: 1000;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }

  nav li {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
  }

  nav li:hover {
    color: #ff4d4d;
  }

  /* Modo oscuro */
  body.dark-mode {
    background: #1a1a1a;
  }
  </style>
