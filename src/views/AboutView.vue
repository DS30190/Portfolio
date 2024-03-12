<template>
    <div class="about">
      <div class="spacer"></div>
      <h1>Contactez moi !</h1>
      <div class="spacer2"></div>
      <p id="message"></p>
      <div class="spacer2"></div>
        <!-- FORM  -->
    <form id="myForm" @submit.prevent="handleClick" action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div class="flex-row">  
          <div class="form-section">
            <label for="first-name" class="block text-sm font-medium text-warm-gray-900">Prénom</label>
            <div class="mt-1">
              <input type="text" name="prenom" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500">
            </div>
          </div>
          <div class="form-section">
            <label for="last-name" class="block text-sm font-medium text-warm-gray-900">Nom</label>
            <div class="mt-1">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500">
            </div>
          </div>
      </div>
         <!-- Nouveau champ "Objet" -->
         <div class="form-section">
            <label for="objet" class="block text-sm font-medium text-warm-gray-900">Objet</label>
              <div class="mt-1">
                <input type="text" name="objet" id="objet" autocomplete="off" class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500">
              </div>
          </div>
          <div class="form-section">
            <div class="flex justify-between">
              <label for="message" class="block text-sm font-medium text-warm-gray-900">Commentaire</label>
              
            </div>
            <div class="mt-1">
              <textarea id="message" name="message" rows="6" maxlength="500" class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500" aria-describedby="message-max"></textarea>
              </div>
          </div>
          
          <div class="sm:col-span-2 sm:flex sm:justify-end">
            <button  type="submit" class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto" @click="handleClick">
              Envoyer
            </button>
          </div>   
        </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
}
button {
      display: block;
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: #557870;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
    .flex-row {
      display: flex;
      justify-content: space-between; /* Espacer les éléments enfants */
      margin-bottom: 20px;
    }

    .flex-row > div {
      flex: 1; /* Les éléments enfants prennent une largeur égale */
    }

    .form-section input,
    .form-section textarea {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      margin-bottom: 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    /* Espacement entre les champs Nom et Prénom */
    .flex-row > div:not(:last-child) {
      margin-right: 8px;
    }
    .spacer {
    height: 8rem; /* Hauteur de l'espace de séparation */
  }
  .spacer2 {
    height: 2rem; /* Hauteur de l'espace de séparation */
  }
  .message {
font-size: 1.5em;
  }
</style>

<script>

export default {
  methods: {
    handleClick(event) {
      const messageElement = document.getElementById("message");
      messageElement.textContent = "Votre message a bien été envoyé !";
    }
  }
};

</script>