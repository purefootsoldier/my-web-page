<template>
  <section class="mis-hobbies" ref="hobbiesSection">
    <h2 class="section-title">
      <i class="pi pi-star-fill mr-2"></i>
      My Hobbies
    </h2>

    <div v-for="(hobby, index) in hobbies" :key="index" v-motion
      :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0 }" :delay="index * 200" class="hobby-row">
      <div class="icon">
        <i :class="hobby.icon"></i>
      </div>
      <div class="hobby-text">
        <h3>{{ hobby.titulo }}</h3>
        <p>{{ hobby.descripcion }}</p>
      </div>
    </div>
  </section>
</template>
<!-- eslint-disable-next-line vue/block-lang -->
<script setup>
import { ref } from "vue";
import { useMotion } from "@vueuse/motion";
const hobbiesSection = ref(null);
useMotion(hobbiesSection, {
  initial: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
});
const hobbies = [
  {
    titulo: '3D Modeling',
    descripcion:
      'I love 3D modeling because it allows me to turn ideas into visual objects. I use tools like Blender to design characters, props, and environments, which I can later animate or integrate into video games. I especially enjoy creating textures and digital sculpting to bring my models to life.',
    icon: 'pi pi-box'
  },
  {
    titulo: 'Game Development',
    descripcion:
      'Game development combines creativity, logic, and art. I enjoy building small interactive experiences using engines like Unity and Godot. Through this passion, I’ve learned about level design, physics, AI, and sound design. Creating a game from scratch feels like building a miniature world.',
    icon: 'pi pi-play'
  },
  {
    titulo: 'Miniatures & Dioramas',
    descripcion:
      'Miniature painting is an art form that allows me to work with precision and detail. I hand-paint miniatures, build dioramas, and craft small scenic pieces. It’s a therapeutic activity that helps me focus and relax, and I love watching each figure come to life with every brushstroke.',
    icon: 'pi pi-palette'
  }
]
</script>

<style scoped>
.mis-hobbies {
  background-color: #1f1f1f;
  padding: 4rem 1rem;
  color: white;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ef4444;
}

.hobby-row {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem 1rem;
  border-bottom: 1px solid #333;
}

.delay-0 {
  animation-delay: 0.2s;
}

.delay-1 {
  animation-delay: 0.4s;
}

.delay-2 {
  animation-delay: 0.6s;
}

.icon {
  font-size: 2.5rem;
  color: #ef4444;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.hobby-text h3 {
  margin: 0;
  font-size: 1.6rem;
  color: white;
}

.hobby-text p {
  margin-top: 0.5rem;
  color: #ccc;
  font-size: 1rem;
  line-height: 1.6;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
