<template>
  <div class="about">
    <h1>Contactez moi !</h1>
    <!-- FORM  -->
    <form id="myForm" action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label for="first-name" class="block text-sm font-medium text-warm-gray-900">Prénom</label>
            <div class="mt-1">
              <input type="text" name="prenom" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500">
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-warm-gray-900">Nom</label>
            <div class="mt-1">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500">
            </div>
          </div>
         <!-- Nouveau champ "Objet" -->
          <div class="sm:col-span-2">
            <label for="objet" class="block text-sm font-medium text-warm-gray-900">Objet</label>
              <div class="mt-1">
                <input type="text" name="objet" id="objet" autocomplete="off" class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500">
              </div>
          </div>
          <div class="sm:col-span-2">
            <div class="flex justify-between">
              <label for="message" class="block text-sm font-medium text-warm-gray-900">Commentaire</label>
              <span id="message-max" class="text-sm text-warm-gray-500">Max. 500 caractères</span>
            </div>
            <div class="mt-1">
              <textarea id="message" name="message" rows="4" maxlength="500" class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500" aria-describedby="message-max"></textarea>
              </div>
          </div>
          <div class="sm:col-span-2 sm:flex sm:justify-end">
            <button type="submit" class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto">
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
    align-items: center;
  }
}
</style>
