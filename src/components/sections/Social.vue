<script setup>
import { ref } from "vue";
import { useMotion } from "@vueuse/motion";
import Card from "primevue/card";
import Button from "primevue/button";

const sectionRef = ref(null);
useMotion(sectionRef, {
  initial: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
});

const socials = [
  {
    name: "Twitter",
    icon: "pi pi-twitter",
    description: "Follow me to stay updated with my latest news and projects.",
    link: "https://x.com/purefootsoldier",
    color: "#1DA1F2"
  },
  {
    name: "Instagram",
    icon: "pi pi-instagram",
    description: "Check out my latest photos and personal moments.(private for now)",
    link: "https://instagram.com/",
    color: "#E1306C"
  },
  {
    name: "LinkedIn",
    icon: "pi pi-linkedin",
    description: "Let’s connect and grow our professional network.",
    link: "www.linkedin.com/in/roberto-fuentes-997734352",
    color: "#0077B5"
  },
  {
    name: "GitHub",
    icon: "pi pi-github",
    description: "Explore my repositories and open-source projects.",
    link: "https://github.com/purefootsoldier",
    color: "#FFFFFF"
  },
]

</script>
<template>
  <section class="social-section" ref="sectionRef">
    <h2>Follow me on my social's</h2>
    <div class="social-cards">
      <Card v-for="(social, index) in socials" :key="social.name" class="p-card" v-motion
        :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0 }" :delay="index * 200">
        <template #header>
          <div class="social-icon">
            <i :class="social.icon"></i>
          </div>
        </template>
        <template #title>
          {{ social.name }}
        </template>
        <template #content>
          <p>{{ social.description }}</p>
        </template>
        <template #footer>
          <Button :label="'Ir a ' + social.name" :icon="social.icon" :href="social.link" target="_blank" />
        </template>
      </Card>
    </div>
  </section>
</template>



<style scoped>
.social-section {
  text-align: center;
  padding: 3rem 1rem;
  background-color: rgb(10, 10, 10);
}

.social-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  justify-content: center;
}

.social-icon>i {
  font-size: 2.5rem;
  padding: 1.5rem;
}
</style>
