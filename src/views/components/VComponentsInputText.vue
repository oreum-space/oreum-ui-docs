<template>
  <o-card
    tag="section"
    clear
  >
    <h1>Input Text</h1>
    <o-input-text />
    <o-input-text label="Text" />
    <o-input-text
      label="Valid"
      valid
    />
    <o-input-text
      label="Invalid"
      :valid="false"
    />
    <o-input-text
      label="Disabled"
      disabled
    />
    <o-input-text
      label="Valid"
      valid
      disabled
    />
    <o-input-text
      label="Invalid"
      :valid="false"
      disabled
    />
  </o-card>
</template>

<script
  setup
  lang="ts"
>
import {
  OInputText,
  OCard
} from 'oreum-ui'
</script>

<style
  scoped
  lang="scss"
>

</style>