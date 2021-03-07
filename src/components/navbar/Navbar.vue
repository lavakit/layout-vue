<template>
  <router-link :to="{name: 'home'}">Home</router-link>
  <router-link :to="{name: 'login'}">Login</router-link>
  <router-link :to="{name: 'register'}">Register</router-link>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'

  export default defineComponent({
    name: 'nav-bar',
  })
</script>