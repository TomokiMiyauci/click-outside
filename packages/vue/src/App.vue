<template>
  <div v-click-outside>fijso</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { clickOutside } from '@/directives'

export default defineComponent({
  directives: {
    clickOutside
  },

  setup() {
    return {
      on: () => console.log(1)
    }
  }
})
</script>
