<template>
    <div @click="close">
       <h1>Dynamiser un espace documentaire</h1>
       <div class="spacer"></div>
       <p>Celui-ci a été créé le 09 février 2024.</p>
       <p>J'ai utilisé l'application <b>VScode</b> afin de rédiger mes pages HTML,CSS et javascript.</p>
       <p><b>Github</b> a été nécessaire afin de créer un repository consultable <a href="https://github.com/DS30190/Dynamiser-un-espace-de-commentaires">ici</a>.</p>
       <p>Lien vers <a href="/index2.html">Dynamiser un espace de commentaires</a></p>
       <div class="spacer"></div>
       <button class="close"  @click="close" >Close</button>
       
    </div>
</template>

<script>
export default {
  name: 'Docu',
  methods: {
  close() {
    window.location.href = './projects'; 
  }
  }
}
</script>

<style>
* {
  text-align: center;
}
b {
    font-weight: bold;
}
.spacer {
    height: 5rem; /* Hauteur de l'espace de séparation */
  }
</style>