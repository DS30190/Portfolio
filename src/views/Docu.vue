<template>
    <div @click="close">
       <h1>Dynamiser un espace documentaire</h1>
       
       <br />
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
</style>