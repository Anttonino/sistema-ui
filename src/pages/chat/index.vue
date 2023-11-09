<template>
  <q-page style="background-color: #1c1c1c">
    <chatSection />
    <footerLayout />
  </q-page>
</template>

<script>
import footerLayout from '../../layouts/footer.vue';
import chatSection from './components/chatSection.vue';
export default {
  name: 'chat-page',
  components: {
    footerLayout,
    chatSection,
  },
  data() {
    return {
      messages: [],
      message: '',
    };
  },
  methods: {
    sendMessage() {
      this.messages.push(this.message);
      this.message = '';
    },
  },
};
</script>
