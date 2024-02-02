<template>
  <o-card
    tag="section"
    clear
  >
    <h1>Progress Circle</h1>

    <h2>Basic</h2>
    <div class="flex align-center">
      <o-progress-circle
        :show="show"
      />
      <o-progress-circle
        size="medium"
        :show="show"
      />
      <o-progress-circle
        size="large"
        :show="show"
      />
    </div>

    <h2>Progress</h2>
    <div class="flex align-center">
      <o-progress-circle
        :value="range"
        :show="show"
      />
      <o-progress-circle
        size="medium"
        :value="range"
        :show="show"
      />
      <o-progress-circle
        size="large"
        :value="range"
        :show="show"
      />
    </div>

    <div class="flex align-center">
      <input
        v-model="range"
        type="range"
        min="0"
        max="1"
        step="0.01"
      >
      <code>
        {{ range }}
      </code>
    </div>
    <div class="flex align-center">
      <label>
        <input
          v-model="show"
          type="checkbox"
        >
        show
      </label>
    </div>
  </o-card>
</template>

<script
  setup
  lang="ts"
>
import {
  OProgressCircle,
  OCard
} from 'oreum-ui'
import { ref } from 'vue'

const range = ref(0.5)
const show = ref(false)
</script>

<style lang="scss">
.flex {
  display: flex;
  gap: 4px;
}
.align-center {
  align-items: center;
}
</style>