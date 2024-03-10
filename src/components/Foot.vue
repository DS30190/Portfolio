<template>
    <footer>
      <!-- Icônes des réseaux sociaux -->
      <div class="social-icons">
        <a href="https://fr.linkedin.com/"><i class="fa-brands fa-linkedin" style="font-size: 5px;"></i></a>
        <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a> 
        <a href="https://github.com/"><i class="fa-brands fa-github"></i></a>
        <!-- Ajoutez d'autres icônes et liens vers vos réseaux sociaux ici -->
      </div>
      <!-- Date de dernière mise à jour -->
      <p>Dernière mise à jour : {{ lastUpdated }}</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Foot',
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