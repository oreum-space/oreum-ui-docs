<template>
  <o-card clear>
    <h1>TabMenu</h1>
    <o-card>
      <o-tab-menu :tabs="tabs" />
    </o-card>
  </o-card>
</template>

<script
  setup
  lang="ts"
>
import { OCard, OTabMenu } from 'oreum-ui'

const tabs = [
  {
    label: 'List'
  },
  {
    label: 'Roaster'
  },
  {
    label: 'Schedule'
  },
  {
    label: 'Unavailable',
    disabled: true
  },
  {
    label: 'Menu'
  },
  {
    label: 'Tab'
  },
  {
    label: 'End'
  }
].map((tab, id) => ({ ...tab, id }))
</script>

<style lang="scss">

</style>