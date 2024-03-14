<template>
    <footer>
     
      <div class="social-icons">
      <a href="https://linkedin.com" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
      <a href="https://twitter.com" target="_blank"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
      <a href="https://github.com" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
      <div class="spacer"></div>
      </div>
     
      <p>Dernière mise à jour : {{ lastUpdated }}</p>
    </footer>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  export default {
    name: 'Foot',
    components: {
        FontAwesomeIcon
    },
    data() {
      return {
        lastUpdated: '2024-03-10' // Vous pouvez initialiser cette valeur ou la mettre à jour dynamiquement dans votre application
      }
    },
  
  mounted() {
   this.lastUpdated = new Date().toISOString().slice(0, 10); // Format YYYY-MM-DD
   }
}
  </script>
  
  <style scoped>
footer{
    background-color: black;
    color: #c5a97f;
    height: 100px;
    text-align: left;
    padding-top: 10px;
}

.fa-linkedin{
    background-color: white;
    color: #0e76a8;
    object-fit: contain;
}
.fa-twitter{
    background-color:#00acee;
    color:white;
}
.fa-square-github{
    background-color: white;
    color:black;
    object-fit: contain;
}
footer div:hover{
    opacity: 0.8;
}
.spacer {
    height: 2rem; 
  }
  </style>