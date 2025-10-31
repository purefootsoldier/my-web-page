<template>
  <section class="contact-section">
    <div class="contact-inner">
      <h3>Contacto</h3>
      <p>¿Interesado en mis servicios? Completa el formulario y te contactaré lo antes posible.</p>

      <form @submit.prevent="handleSubmit" novalidate class="contact-form">
        <label>
          Nombre completo
          <input type="text" v-model="name" required placeholder="Tu nombre" />
        </label>

        <label>
          Correo electrónico
          <input type="email" v-model="email" required placeholder="tu@correo.com" />
        </label>

        <label>
          Teléfono (opcional)
          <input type="tel" v-model="phone" placeholder="+52 1 55 0000 0000" />
        </label>

        <label>
          Mensaje
          <textarea v-model="message" rows="4" required placeholder="¿En qué puedo ayudarte?"></textarea>
        </label>

        <label class="privacy">
          <input type="checkbox" v-model="privacyAccepted" />
          <div>
            Acepto el <a href="#" @click.prevent="showPrivacy = true">Aviso de Privacidad</a>.
          </div>

        </label>

        <div class="actions">
          <button type="submit" :disabled="submitting">Enviar</button>
        </div>
      </form>

      <div v-if="submitted" class="success">
        Gracias, tu mensaje se ha enviado correctamente. Me pondré en contacto contigo pronto.
      </div>

      <PrivacyNotice v-if="showPrivacy" @close="showPrivacy = false" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PrivacyNotice from '../global/PrivacyNotice.vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const privacyAccepted = ref(false)
const submitting = ref(false)
const submitted = ref(false)
const showPrivacy = ref(false)

function validateEmail(e: string) {
  return /\S+@\S+\.\S+/.test(e)
}

async function handleSubmit() {
  // Validación básica
  if (!name.value.trim() || !email.value.trim() || !message.value.trim() || !privacyAccepted.value) {
    alert('Por favor completa los campos requeridos y acepta el aviso de privacidad.')
    return
  }

  if (!validateEmail(email.value)) {
    alert('Introduce un correo electrónico válido.')
    return
  }

  submitting.value = true
  const payload = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
    acceptedPrivacy: privacyAccepted.value,
    sentAt: new Date().toISOString(),
  }
  console.log('Contact form payload:', payload)

  setTimeout(() => {
    submitted.value = true
    submitting.value = false
    name.value = ''
    email.value = ''
    phone.value = ''
    message.value = ''
    privacyAccepted.value = false
    setTimeout(() => (submitted.value = false), 6000)
  }, 700)
}
</script>

<style scoped>
.contact-section {
  padding: 2rem 1rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent);
  color: #fff;
}

.contact-inner {
  max-width: 800px;
  margin: 0 auto;
}

.contact-form {
  display: grid;
  gap: 0.75rem;
  margin-top: 1rem;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
}

.contact-form input,
.contact-form textarea {
  margin-top: 0.35rem;
  padding: 0.6rem 0.7rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.25);
  color: #fff;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.privacy {
  /* Override the general label column layout: show checkbox and text inline */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

/* Improve link appearance inside the privacy label */
.privacy a {
  color: #ffd1d1;
  text-decoration: underline;
  font-weight: 500;
}

.privacy input[type="checkbox"] {
  width: 1.05rem;
  height: 1.05rem;
}

.actions {
  margin-top: 0.5rem;
}

.actions button {
  padding: 0.6rem 1rem;
  border-radius: 6px;
  border: none;
  background: #ff4d4d;
  color: #fff;
  cursor: pointer
}

.actions button[disabled] {
  opacity: 0.6;
  cursor: default
}

.success {
  margin-top: 1rem;
  color: #8df29a;
}

/* Modal placeholder for privacy */
.privacy-modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
}

.privacy-content {
  max-width: 900px;
  background: #0f0f0f;
  color: #fff;
  padding: 1.25rem;
  border-radius: 8px;
  overflow: auto;
  max-height: 80vh;
}

@media (max-width:768px) {
  .contact-inner {
    padding: 0 1rem;
  }
}
</style>
