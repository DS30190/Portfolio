<template>
    <div class="projects">
      <h1>Mes projets</h1>
      <div class="spacer"></div>
      <cv></cv>
      <img src="@/assets/images/Photocv.jpg" alt="Mon cv" width="100" height="150" >
      <br />
      <cahier></cahier>
      <img src="@/assets/images/Cahier.jpg" alt="Cahier" width="100" height="150" >
      <br />
      <docu></docu>
      <img src="@/assets/images/Dyn.jpg" alt="Dynamiser" width="100" height="150" >
    </div>
  </template>

<script>

import Cv from "@/components/Cv.vue";
import Cahier from "@/components/Cahier.vue";
import Docu from "@/components/Docu.vue"

export default {
  components: {
    
    Cv,
    Cahier,
    Docu
  },


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
    height: 2rem; 
  }
  }

  </style>