<script setup lang="ts">
import { Button } from 'primevue';
import Hero from './components/sections/Hero.vue';
import Header from './components/global/Header.vue';
import Social from './components/sections/Social.vue';
import Footer from './components/global/Footer.vue';
import AboutMe from './components/sections/AboutMe.vue';
import MisProyectos from './components/sections/MisProyectos.vue';
import MisHobbies from './components/sections/MisHobbies.vue';
</script>

<template>
  <Header/>   
  <main>
    <Hero/>
    <Social/>
    <AboutMe/>
    <MisProyectos/>
    <MisHobbies/>
  </main>
  <Footer/>
  
</template>
