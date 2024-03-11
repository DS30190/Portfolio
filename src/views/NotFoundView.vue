<template>
    <div>
      <img src="@/assets/images/Photocv.jpg" alt="404 Image" />
      <h1>404</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <button class="retour"  @click="close" >Retour à la page d'acceuil</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundView',
    methods: {
  close() {
    window.location.href = './HomeView.vue'; 
  }
  }
}
  </script>
  