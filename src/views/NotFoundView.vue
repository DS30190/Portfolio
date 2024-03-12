<template>
    <div>
      <img src="@/assets/images/Error.jpg" alt="404 Image" />
      
      <button class="retour"  @click="close" >Retour à la page d'acceuil</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundView',
    methods: {
  close() {
    window.location.href = './'; 
  }
  }
}
  </script>

  <style>
  .retour {
background-color: #557870;
  } 
</style>
  