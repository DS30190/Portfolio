<template>
    <div @click="close">
       <h1>Rédiger un cahier des charges</h1>
       
       <br />
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
</style>