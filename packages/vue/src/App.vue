<template>
  <div v-click-outside="on">fijso</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
import { clickOutside } from './directives'
</script>
