<template>
  <h1>Home Page</h1>
  <button @click="inc">{{ count }}</button>
</template>

<script lang="ts">
  import { ref } from 'vue'


  export default {
    setup() {
      const count = ref(0)
      const inc = () => count.value++

      return {
        count,
        inc,
      }
    },
  }
</script>