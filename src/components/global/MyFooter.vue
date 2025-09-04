<template>
    <footer class="footer-container">
        <div class="footer-content">
            <div class="footer-brand">
                <span><i class="pi pi-globe"></i> My blog</span>
                <p>© 2025 All right's reserved.</p>
            </div>

            <div class="footer-links">
                <!--<a href="#"><i class="pi pi-home"></i> Inicio</a>
                <a href="#"><i class="pi pi-book"></i> Artículos</a>
                <a href="#"><i class="pi pi-user"></i> Sobre mí</a>
                <a href="#"><i class="pi pi-envelope"></i> Contacto</a>
                -->
            </div>

            <div class="footer-social">
                <a href="https://x.com/purefootsoldier"><i class="pi pi-twitter"></i></a>
                <a href="https://github.com/purefootsoldier"><i class="pi pi-github"></i></a>
                <a href="www.linkedin.com/in/roberto-fuentes-997734352"><i class="pi pi-linkedin"></i></a>
            </div>
        </div>
    </footer>
</template>
<!-- eslint-disable-next-line vue/block-lang -->
<script setup>
</script>

<style scoped>
.footer-container {
    background-color: rgb(10, 10, 10);
    background-color: var();
    color: var(--surface-100);
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
}

.footer-content {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    gap: 1.5rem;
}

.footer-brand span {
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.footer-brand p {
    font-size: 0.9rem;
    opacity: 0.7;
}

.footer-links {
    display: flex;
    gap: 1rem;
}

.footer-links a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: #ff4d4d;;
}

.footer-social a {
    color: inherit;
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: color 0.3s;
}

.footer-social a:hover {
    color: #ff4d4d;;
}
</style>
