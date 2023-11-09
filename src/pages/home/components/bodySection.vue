<template>
  <div v-if="$q.screen.gt.sm" class="body p-5">
    <div class="text-4xl text-center text-white py-5 mb-10 mt-4">
      Conheça o passo a passo do teste:
    </div>
    <div class="grid grid-cols-8 px-36 h-full">
      <div class="flex flex-col mt-10 col-span-1">
        <circleBadge label="1" :line="true" />
        <circleBadge label="2" :line="true" />
        <circleBadge label="3" />
      </div>
      <div class="flex flex-col gap-10 col-span-7 mb-10">
        <infoCard
          title="Lorem ipsum dolor sit"
          description="Lorem ipsum dolor sit amet. Qui dolore doloremque ab praesentium ullam quo ullam laudantium aut culpa reiciendis. Ut laudantium consequatur non quas reiciendis et "
        />
        <infoCard
          title="Lorem ipsum dolor sit"
          description="Lorem ipsum dolor sit amet. Qui dolore doloremque ab praesentium ullam quo ullam laudantium aut culpa reiciendis. Ut laudantium consequatur non quas reiciendis et "
        />
        <infoCard
          title="Lorem ipsum dolor sit"
          description="Lorem ipsum dolor sit amet. Qui dolore doloremque ab praesentium ullam quo ullam laudantium aut culpa reiciendis. Ut laudantium consequatur non quas reiciendis et "
        />
      </div>
    </div>
  </div>

  <div v-else class="body">
    <div class="text-4xl text-center text-white py-5 mb-5">
      Conheça o passo a passo do teste:
    </div>
    <div class="flex">
      <div class="flex flex-col mt-10 col-span-1">
        <circleBadge label="1" :line="true" />
        <infoCard
          title="Lorem ipsum dolor sit"
          description="Lorem ipsum dolor sit amet. Qui dolore doloremque ab praesentium ullam quo ullam laudantium aut culpa reiciendis. Ut laudantium consequatur non quas reiciendis et "
        />
      </div>
    </div>
  </div>
</template>

<script>
import circleBadge from '../../../components/shared/circleBadge.vue';
import infoCard from '../../../components/shared/infoCard.vue';

export default {
  name: 'heroSection',
  components: {
    circleBadge,
    infoCard,
  },
};
</script>

<style>
.body {
  background-color: #1c1c1c;
}
</style>
