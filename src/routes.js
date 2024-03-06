// routes.js
import { writable } from 'svelte/store';
import Intro from './pages/Intro.svelte';
import Guide from './pages/Guide.svelte';

// Define tus rutas aquí
const routes = [
  { name: 'Intro', path: '/intro', component: Intro },
  { name: 'Guide', path: '/guide', component: Guide },
  // Agrega más rutas según sea necesario
];

// Crea un store y almacena las rutas en él
export const routesStore = writable(routes);
