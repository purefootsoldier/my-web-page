<template>
  <section class="hero">
    <div class="fixed-bg-container">
      <video autoplay loop muted playsinline class="hero-video">
        <source src="../../assets/yt1z.net - BATTLETECH - Intro Cinematic (720p).mp4" type="video/mp4">
        Tu navegador no soporta videos.
      </video>
    </div>
    <div class="video-overlay"></div>
    <div class="hero-content">
      <div class="welcome">
        <h1>👋 Hey there, welcome to my personal space.</h1>
        <p>
          Here I share my projects, ideas, and insights from my journey in software development, along with bits of my
          professional and creative life.

          This blog is also a place to connect: you can explore what I’m working on, get a glimpse of my background, and
          reach out if you’d like to collaborate—or just chat about new ideas. 🚀
        </p>
      </div>
      <div class="haii">
        <Button label="ello" variant="outlined" />
        <Button label="ello" severity="contrast" variant="text" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { Button } from 'primevue';
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  const videoContainer = document.querySelector('.fixed-bg-container');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const velocidad = 0.4;
    videoContainer.style.transform = `translateY(${scrollPosition * velocidad}px)`;
  };

  window.addEventListener('scroll', handleScroll);
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>
<style scoped>
.haii {
  display: flex;
  justify-content: space-between;
}

.fixed-bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  overflow: hidden;
  z-index: -1;
}

.hero {
  position: relative;
  width: 100%;
  height: 105vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -80px;
  padding-top: 80px;
}
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.hero-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  text-align: center;
  color: white;
  z-index: 2;
}

.hero-content>div {
  margin: auto 10rem;
}

.welcome>h1,
p {
  justify-content: flex-start;
  justify-self: start;
  text-align: start;
}
</style>
