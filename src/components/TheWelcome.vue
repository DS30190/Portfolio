<script setup>
import WelcomeItem from './WelcomeItem.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'

</script>

<template>
  

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>A PROPOS</template>

    Bonjour, je suis un jeune développeur web et web mobile freelance. J'aime à réaliser des 
    projets complexes et mener à  bien toutes les phases de développement d'un projet que ce
    soit en Front-end ou en Back-end.
    Je suis en permanence à l'écoute des nouveautés et passionné par les nouvelles 
    technologies qui offrent de multiples possibilités afin de laisser libre cours à mon imagination.
  </WelcomeItem>
  <div class="spacer"></div>
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>ABOUT</template>

    Hello, I am a young web and webmobile freelance developer. I like to create
    complex projects and successfully complete all phases of a creation whether
    either in Front-end or Back-end.
    I am constantly listening to new developments and passionate about news
    technologies that offer multiple possibilities to give free rein to my imagination.
  </WelcomeItem>

  
</template>

<style>
.spacer {
    height: 4rem; 
  }
</style>
