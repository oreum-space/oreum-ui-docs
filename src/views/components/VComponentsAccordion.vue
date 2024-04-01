<template>
  <o-card clear>
    <h1>Accordion</h1>
    <p>An accordion is a container with content that is hidden under a button.</p>

    <o-card
      tag="section"
      clear
    >
      <h2>Import</h2>
      <o-card>
        <code>
          import { OAccordion, OCard } from 'oreum-ui'
        </code>
      </o-card>
    </o-card>

    <o-card
      tag="section"
      clear
    >
      <h2>Basic</h2>
      <o-card>
        <o-accordion header="Header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </o-accordion>
      </o-card>
      <o-card>
        <pre><code>&lt;o-accordion header=&quot;Header&quot;&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
&lt;/o-accordion&gt;</code></pre>
      </o-card>
    </o-card>

    <o-accordion disabled>
      <template #header>
        Disabled Header
      </template>
      <template #default>
        Content Disabled
      </template>
    </o-accordion>
  </o-card>
</template>

<script
  setup
  lang="ts"
>
import {
  OAccordion,
  OCard
} from 'oreum-ui'
</script>

<style
  scoped
  lang="scss"
>

</style>