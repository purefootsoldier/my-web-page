<template>
  <div class="privacy-modal" @click.self="close">
    <div class="privacy-content">
      <div class="header">
        <h2>Aviso de Privacidad</h2>
        <button class="close" @click="close">Cerrar</button>
      </div>

      <section class="notice">
        <h3>Identidad y domicilio del responsable</h3>
        <p>
          El responsable del tratamiento de sus datos personales es: <strong>
            Jose Roberto Fuentes Salinas </strong>.
          Para cualquier asunto relacionado con sus datos personales puede comunicarse al correo:
          <strong>contacto@purecuck.com</strong> o al domicilio ubicado en: <em>Sm 70, casa 3 lote 17, Benito Juarez,
            Cancun
            Q.Roo</em>.
        </p>

        <h3>Finalidades del tratamiento</h3>
        <p>Los datos personales que se recaban en el formulario se utilizarán para las siguientes finalidades
          principales:</p>
        <ul>
          <li>Contactar al interesado y dar seguimiento a solicitudes de servicio o consultas.</li>
          <li>Proveer, cumplir y gestionar los servicios profesionales solicitados.</li>
          <li>Enviar información administrativa y relacionada con el servicio solicitado.</li>
        </ul>

        <p>
          Finalidades secundarias (no necesarias para la prestación del servicio). Con su consentimiento,
          podremos usar sus datos para:
        </p>
        <ul>
          <li>Enviar boletines, promociones o comunicaciones comerciales. Puede oponerse a este uso marcando
            la casilla correspondiente o escribiendo a <strong>contacto@purecuck.com</strong>.</li>
        </ul>

        <h3>Opciones y medios para ejercer los derechos ARCO</h3>
        <p>
          Usted puede ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación y
          Oposición (ARCO), así como revocar su consentimiento para fines particulares,
          enviando una solicitud al correo <strong>contacto@purecuck.com</strong> con el asunto "ARCO"
          indicando la acción requerida, una descripción clara de los datos y documentación que acredite su
          identidad.
        </p>
        <p>El responsable dará respuesta dentro de los plazos y condiciones establecidos por la ley
          (generalmente dentro de 20 días hábiles).</p>

        <h3>Transferencias de datos</h3>
        <p>
          Sus datos personales no serán transferidos a terceros sin su consentimiento explícito, salvo las
          excepciones previstas por la ley.
          En caso de requerir transferir datos (por ejemplo, a proveedores que apoyen la prestación del
          servicio), se solicitará su consentimiento previo y explícito.
        </p>

        <h3>Legislación aplicable</h3>
        <p>
          El presente Aviso de Privacidad se emite en términos de la <strong>Ley Federal de Protección de Datos
            Personales en Posesión de los Particulares (LFPDPPP)</strong>, su Reglamento y demás disposiciones
          aplicables en México. La atención de derechos ARCO, procedimientos y obligaciones del responsable se
          sujetarán a dicha normativa.
        </p>
        <p>
          Para consulta pública y referencia puede revisar el texto de la ley y documentos asociados, por
          ejemplo en la Cámara de Diputados: <a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf"
            target="_blank" rel="noopener">Ley LFPDPPP (texto)</a>
          o en el Instituto Nacional de Transparencia (INAI): <a href="https://www.inai.org.mx" target="_blank"
            rel="noopener">INAI</a>.
        </p>

        <h3>Retención y seguridad</h3>
        <p>
          Conservaremos sus datos personales únicamente durante el tiempo necesario para cumplir con las
          finalidades para las que fueron recabados y conforme a las obligaciones legales aplicables.
          Se implementan medidas técnicas y administrativas para proteger los datos contra acceso no
          autorizado, pérdida o alteración. El acceso a los datos está limitado al personal autorizado.
        </p>

        <h3>Justificación del uso de los datos</h3>
        <p>
          Solicitamos nombre, correo y mensaje para identificar a la persona interesada, poder responder a su
          solicitud y, en su caso, formalizar la prestación de servicios. El teléfono es opcional y facilita
          la comunicación directa.
          La base legal para el tratamiento es el consentimiento del titular y/o la ejecución de acciones
          previas a la celebración de un contrato a solicitud del titular.
        </p>

        <h3>Contacto y aviso integral</h3>
        <p>
          Para mayor información y el aviso de privacidad integral, consulte el enlace o comuníquese al
          correo: <strong>contacto@purecuck.com</strong>.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
const emit = defineEmits(['close'])
function close() {
  emit('close')
}
</script>

<style scoped>
.privacy-modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999
}

.privacy-content {
  max-width: 900px;
  width: calc(100% - 2rem);
  background: #0b0b0b;
  color: #fff;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  max-height: 80vh;
  overflow: auto
}

.privacy-content .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem
}

.privacy-content .header h2 {
  margin: 0
}

.privacy-content .header .close {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  padding: 0.35rem 0.6rem;
  border-radius: 6px;
  cursor: pointer
}

.privacy-content h3 {
  margin-top: 1rem
}

.privacy-content p {
  line-height: 1.4;
  opacity: 0.95
}

.privacy-content ul {
  margin-left: 1rem
}

.privacy-content .small {
  margin-top: 1rem;
  opacity: 0.7;
  font-size: 0.9rem
}
</style>
