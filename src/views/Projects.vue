<template>
    <div class="projects">
      <h1>Mes projets</h1>
      <cv></cv>
    </div>
  </template>

<script>
// Importez le composant cv.vue
import Cv from "@/components/Cv.vue";

export default {
  components: {
    // Déclarez le composant cv.vue dans votre vue projets.vue
    Cv
  },
  // Autres options de votre composant projets.vue
}
</script>

  <style>
  @media (min-width: 1024px) {
    .projects {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>