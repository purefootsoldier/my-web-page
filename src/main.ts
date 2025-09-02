import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import App from './App.vue';
import './assets/main.css';
import 'primeicons/primeicons.css'

import { MotionPlugin } from '@vueuse/motion';

// Define un preset de colores personalizados basado en Aura
const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            primary: {
                50: '{red.50}',
                100: '{red.100}',
                200: '{red.200}',
                300: '{red.300}',
                400: '{red.400}',
                500: '{red.500}',
                600: '{red.600}',
                700: '{red.700}',
                800: '{red.800}',
                900: '{red.900}',
                950: '{red.950}'
            },
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                }
            }
        }
    }
});

// Crear la app de Vue y configurar PrimeVue
const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: MyPreset
    }
});
app.use(MotionPlugin)
// Montar la aplicación después de configurar todo
app.mount('#app');