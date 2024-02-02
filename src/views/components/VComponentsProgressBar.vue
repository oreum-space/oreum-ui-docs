<template>
  <o-card
    tag="section"
    clear
  >
    <h1>Progress Bar</h1>
    <o-progress-bar />
    <o-progress-bar
      :value="range"
      :show="show"
    />
    <o-progress-bar
      :value="range"
      :show="text"
    />

    <o-card>
      <h2>Progress Bar inside card</h2>
      <o-progress-bar />
      <o-progress-bar
        :value="range"
        :show="show"
      />
      <o-progress-bar
        :value="range"
        :show="text"
      />
    </o-card>

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
      <code>value: </code>
      <input v-model="text">
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
  OProgressBar,
  OCard
} from 'oreum-ui'
import { ref } from 'vue'

const range = ref(0.5)
const text = ref('Progress Bar')
const show = ref(false)
</script>
