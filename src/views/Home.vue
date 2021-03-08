<template>
  <h1>Home Page</h1>
  <span v-html="message"></span>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  const Home = defineComponent({
    name: 'Home',
    data() {
      return {
        message: 'this is test'
      }
    },
  });

  export default Home;

</script>
