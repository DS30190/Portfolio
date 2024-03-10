<template>
    <footer>
      <!-- Icônes des réseaux sociaux -->
      <div class="social-icons">
      <a href="https://linkedin.com" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
      <a href="https://twitter.com" target="_blank"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
      <a href="https://github.com" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
      
      </div>
      <!-- Date de dernière mise à jour -->
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
    }
  }
  </script>
  
  <style scoped>
footer{
    background-color: #782221;
    color: white;
    height: 100px;
    text-align: center;
    padding-top: 20px;
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
    color:#782221;
}
footer div:hover{
    opacity: 0.8;
}
  </style>