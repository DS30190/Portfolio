<template>
    <div class="projects">
      <h1>Mes projets</h1>
      <div class="spacer"></div>
      <cv></cv>
      <br />
      <cahier></cahier>
      <br />
      <docu></docu>
    </div>
  </template>

<script>
// Importez le composant cv.vue
import Cv from "@/components/Cv.vue";
import Cahier from "@/components/Cahier.vue";
import Docu from "@/components/Docu.vue"

export default {
  components: {
    // Déclarez le composant cv.vue dans votre vue projets.vue
    Cv,
    Cahier,
    Docu
  },

  // Autres options de votre composant projets.vue
}
</script>

  <style>
  @media (min-width: 1024px) {
    .projects {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .spacer {
    height: 10rem; /* Hauteur de l'espace de séparation */
  }
  }
  </style>