<template>
  <div v-if="$q.screen.gt.xs" class="teste h-128 w-full">
    <div class="flex justify-between">
      <div class="px-12 py-14 max-w-lg">
        <div class="text-base text-white pb-4">LOREM IPSUM</div>
        <div class="text-4xl text-white">Lorem ipsum dolor sit</div>
        <div class="text-4xl text-white pb-5">Sed quia accusamus vel</div>
        <div class="text-base text-white">
          Lorem ipsum dolor sit amet. Sed quia accusamus vel temporibus incidunt
          eos inventore saepe qui adipisci dicta. Hic iusto voluptas qui
        </div>
        <q-btn
          push
          class="q-mt-xl"
          color="red"
          text-color="black"
          unelevated
          to="/chatbot"
          label="Iniciar Teste"
          no-caps
        ></q-btn>
      </div>
      <img
        src="../../../assets/image/mascote.png"
        class="md:h-64 md:mt-14 lg:h-1/3 lg:mt-5 mr-8"
      />
    </div>
  </div>

  <div v-else style="background-color: #1c1c1c">
    <div class="p-8 flex flex-col">
      <div class="text-xs text-center text-white pb-4">LOREM IPSUM</div>
      <div class="text-2xl text-center text-white">Lorem ipsum dolor sit</div>
      <div class="text-2xl text-center text-white pb-5">
        Sed quia accusamus vel
      </div>
      <div class="text-xs text-center text-white">
        Lorem ipsum dolor sit amet. Sed quia accusamus vel temporibus incidunt
        eos inventore saepe qui adipisci dicta. Hic iusto voluptas qui
      </div>
      <q-btn
        push
        class="q-mt-md"
        color="red"
        text-color="black"
        unelevated
        to="/chatbot"
        label="Iniciar Teste"
        no-caps
      ></q-btn>
    </div>
    <div class="h-96 w-full flex justify-center">
      <img src="../../../assets/image/mascote.png" class="h-96" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'heroSection',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&family=Montserrat:wght@100;400;500;800&family=Poppins:wght@300;500;600&display=swap');

.teste {
  background-image: url('../../../assets/image/backgroundHero.jpg');
  background-size: cover;
  background-position: center;
}
</style>
