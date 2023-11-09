<template>
  <q-chat-message
    name="name"
    class="text-white text-base"
    sent
    avatar="https://cdn.quasar.dev/img/avatar4.jpg"
    text-color="white"
    bg-color="grey-8"
  >
    <div>{{ message }}</div>
    <q-option-group v-model="group" :options="options" color="primary" />
  </q-chat-message>
</template>

<script>
export default {
  name: 'user-message',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      group: 'radio',
      options: [
        {
          label: 'Sim',
          value: 'radio',
        },
        {
          label: 'Não',
          value: 'checkbox',
        },
      ],
    };
  },
};
</script>
