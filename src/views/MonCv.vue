<template>
    <div @click="close">
       <h1>Mon CV</h1>
       <p>Celui-ci a été créé le 07 janvier 2024.</p>
       <p>J'ai utilisé l'application VScode afin de rédiger mes pages HTML et CSS.</p>
       <p>L'application Github a été nécessaire afin de créer un repository consultable à https://github.com/DS30190/Devoir-CV</p>
       <p>Mon CV est consultable à https://cv.DS30190.fr/</p>
       <img src="@/assets/images/Photocv.jpg" alt="Mon cv" width="300" height="450" >
       <br />
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
</style>


