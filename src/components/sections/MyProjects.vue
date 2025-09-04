<template>
  <section class="mis-proyectos">
    <h2 class="section-title">
      <i class="pi pi-folder-open mr-2"></i>
      My projects
    </h2>

    <div class="projects-grid">
      <Card v-for="(proyecto, index) in proyectos" :key="index" class="project-card">
        <template #header>
          <img v-if="proyecto.imagen" :src="proyecto.imagen" alt="Project image" class="card-image" />
        </template>
        <template #title>
          {{ proyecto.nombre }}
        </template>
        <template #content>
          <p>{{ proyecto.descripcion }}</p>
        </template>
        <template #footer>
          <a v-if="proyecto.link" :href="proyecto.link" target="_blank"
            class="p-button p-button-sm p-button-outlined text-red-500">
            <i class="pi pi-external-link mr-2"></i> Ver más
          </a>
        </template>
      </Card>
    </div>
  </section>
</template>
<!-- eslint-disable-next-line vue/block-lang -->
<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'

const proyectos = ref([
  {
    nombre: 'Talk',
    descripcion: 'A programming language built in Python to explore the internal processes of an interpreter',
  },
  {
    nombre: 'UTPark',
    descripcion: 'A university project to manage parking slots within the campus',
  },
  {
    nombre: 'My Blog',
    descripcion: 'A blog built with PrimeVue and Vue',
    link: '#'
  },
  {
    nombre: 'Showdown',
    descripcion: 'A game in development about samurais; once finished, it will be available on itch.io',
  }
])

</script>

<style scoped>
.mis-proyectos {
  background-color: #2c2c2c;
  padding: 4rem 1rem;
  color: white;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ef4444;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.project-card {
  background-color: #1f1f1f;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
