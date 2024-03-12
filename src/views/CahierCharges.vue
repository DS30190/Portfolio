<template>
    <div @click="close">
       <h1>Rédiger un cahier des charges</h1>
       <div class="spacer"></div>
       <p>Le cahier des charges que j'ai réalisé à l'occasion de la création du site web du commerce La Socketterie a été créé le 20 janvier 2024.</p>
       <p>J'ai utilisé l'application <b>Microsoft Word</b>  afin de rédiger mon document.</p>
       <p>L'application <b>Lucichart</b> a été nécessaire afin de créer le Wireframe et le maquettage du site</p>
       <p>Le devis et les livrables ont été réalisés avec <b>Micrsoft Excel</b></p>
       <p>Lien vers <a href="/files/Socketterie.pdf">Mon cahier des charges.</a></p>
       <div class="spacer"></div>
       <button class="close"  @click="close" >Close</button>
       
    </div>
</template>

<script>
export default {
  name: 'CahierCharges',
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
    text-decoration: underline;
}
.spacer {
    height: 5rem; 
  }
  .close {
background-color: #557870;
  } 
  h1{
    color: #557870;
  }
</style>