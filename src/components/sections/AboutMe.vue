<template>
  <section class="about-me">
    <div class="about-content">
      <div class="text-section">
        <h2>About me</h2>
        <p>
          Hi there! I'm a developer passionate about technology. I love exploring new ways to solve problems through
          clean, efficient, and creative code.
        </p>
        <p>
          Here you’ll find content related to my interests, ongoing projects, and some highlights from my professional
          journey.
          I also share experiments, side projects, and ideas I’m currently building—always looking for opportunities to
          learn, grow, and collaborate with others.
        </p>
        <p>
          Beyond coding, I’m kind of a geek about many things—gaming, wargaming, trading card games, and especially
          tabletop adventures.
          These passions inspire my creativity and often influence the projects I work on.
        </p>
        <p>
          Whether you’re here to explore my work, connect for potential collaborations, or just get inspired, I hope you
          enjoy browsing through my projects and thoughts.
        </p>
      </div>
      <div class="image-section">
        <img src="../../assets/E.jpg" alt="Sobre mí" />
      </div>
    </div>
  </section>
</template>


<style scoped>
.about-me {
  background-color: #1f1f1f;
  padding: 2rem 1rem;
  color: white;
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  min-height: 400px;
  overflow: hidden;
}

/* Texto 70% */
.text-section {
  flex: 0 0 70%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Imagen 30% */
.image-section {
  flex: 0 0 30%;
  position: relative;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Imagen más pequeña y centrada */
.image-section img {
  width: 90%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

/* Responsivo */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .text-section,
  .image-section {
    flex: 1 1 100%;
    clip-path: none;
    text-align: center;
  }

  .image-section img {
    width: 60%;
    margin: 2rem auto;
  }
}
</style>
