<template>
  <div class="flex justify-center mb-3">
    <div class="shadow-6 h-screen w-3/4 mt-5 back px-11 py-6">
      <botMessage message="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" />
      <userMessage message="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" />
    </div>
  </div>
</template>

<script>
import botMessage from './botMessage.vue';
import userMessage from './userMessage.vue';
export default {
  name: 'chat-section',
  components: {
    botMessage,
    userMessage,
  },
};
</script>

<style>
.back {
  background: rgb(204, 28, 44);
  background: radial-gradient(
    circle,
    rgba(204, 28, 44, 1) 0%,
    rgba(40, 36, 44, 1) 76%
  );
}
</style>
