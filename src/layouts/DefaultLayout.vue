<template>
  <div class="wrapper">
    <header>
      <nav-bar></nav-bar>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import NavBar from "@/components/navbar/Navbar.vue";

  export default defineComponent({
    name: 'default-layout',
    components: {
      NavBar
    }
  })
</script>