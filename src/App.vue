<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'

  export default defineComponent({
    setup() {
      const { currentRoute } = useRouter()

      const layout = computed(() => {
        return currentRoute.value.meta.layout || DefaultLayout
      })

      return { layout }
    },
  })
</script>
