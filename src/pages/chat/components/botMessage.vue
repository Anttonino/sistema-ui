<template>
  <q-chat-message
    name="name"
    class="text-white text-base"
    avatar="../../../assets/image/2.png"
    text-color="white"
    bg-color="red-10"
  >
    <div>{{ message }}</div>
  </q-chat-message>
</template>

<script>
export default {
  name: 'bot-message',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
