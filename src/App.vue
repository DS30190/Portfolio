<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Foot from './components/Foot.vue';


</script>

<template>
  <header>
    <RouterLink to="/">
      <img src="@/assets/images/D S.jpg" alt="logo" class="logo" width="500" height="500" />
    </RouterLink>
    <div class="wrapper">
      <HelloWorld msg="David Saumet" />

      <nav>
        <RouterLink to="/">Acceuil</RouterLink>
        <RouterLink to="/about">Contact</RouterLink>
        <RouterLink to="/projects">Projets</RouterLink>
      </nav>
    </div>
    
  </header>

  <RouterView />
  <Foot />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  color: #c5a97f;

}

nav a.router-link-exact-active {

  text-decoration: underline;

}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: #c5a97f;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<script>
export default {
  head() {
    return {
      title: 'David Saumet - Portfolio', 
      meta: [
        { name: 'description', content: 'Bienvenue sur le portfolio de David Saumet. Découvrez mes projets et mon parcours.' }
      ]
    }
  }
}
</script>