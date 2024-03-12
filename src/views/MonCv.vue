<template>
    <div @click="close">
       <h1>Mon CV</h1>
       <div class="spacer"></div>
       <p>Celui-ci a été créé le 07 janvier 2024.</p>
       <p>J'ai utilisé l'application <b>VScode</b> afin de rédiger mes pages HTML et CSS.</p>
       <p><b>Github</b> a été nécessaire afin de créer un repository consultable <a href="https://github.com/DS30190/Devoir-CV">ici</a>.</p>
       <p>Lien vers <a href="/Untitled-1.html">Mon CV</a></p>
       <div class="spacer"></div>
       <button class="close"  @click="close" >Close</button>
       
    </div>
</template>

<script>
export default {
  name: 'MonCv',
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
    height: 5rem; 
  }
  .close {
background-color: #557870;
  } 
</style>


