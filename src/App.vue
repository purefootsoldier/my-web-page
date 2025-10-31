<template>
  <MyHeader />
  <main>
    <MyHero />
    <MySocial />
    <AboutMe />
    <MyProjects />
    <MyHobbies />
    <ContactForm />
  </main>
  <MyFooter />

</template>
<!-- eslint-disable-next-line vue/block-lang -->
<script setup>

import ContactForm from "./components/sections/ContactForm.vue"
import MyHero from './components/sections/MyHero.vue';
import MyHeader from './components/global/MyHeader.vue';
import MySocial from './components/sections/MySocials.vue';
import MyFooter from './components/global/MyFooter.vue';
import AboutMe from './components/sections/AboutMe.vue';
import MyProjects from './components/sections/MyProjects.vue';
import MyHobbies from './components/sections/MyHobbies.vue';
</script>
