<template>
  <o-card clear>
    <OTabMenu
      v-model="tab"
      :tabs="componentTopMenuTabs"
    />

    <o-card
      v-show="tab === 0"
      clear
    >
      <h1>Accordion</h1>
      <p>An accordion is a container with content that is hidden under a button.</p>

      <o-card
        tag="section"
        clear
      >
        <h2>Import</h2>
        <c-code
          lang="ts"
          code="import { OAccordion, OCard } from 'oreum-ui'"
        />
      </o-card>

      <o-card
        tag="section"
        clear
      >
        <h2>Basic</h2>
        <o-card class="o-card_content">
          <o-accordion header="Header">
            Accordion content.
          </o-accordion>
        </o-card>
        <c-code
          lang="template"
          :code="basicCode"
        />
      </o-card>

      <o-card
        tag="section"
        clear
      >
        <h2>Disabled</h2>
        <o-card class="o-card_content">
          <o-accordion
            header="Disabled Header"
            disabled
          >
            Content Disabled
          </o-accordion>
        </o-card>
        <c-code
          lang="template"
          :code="disabledCode"
        />
      </o-card>

      <o-card
        tag="section"
        clear
      >
        <h2>Template</h2>
        <o-card class="o-card_content">
          <o-accordion pre-opened>
            <template #header>
              <OIcon
                icon="components"
              /> Icon
            </template>
            <template #default>
              I was pre opened
            </template>
          </o-accordion>
          <o-accordion>
            <template #header>
              <img width="24" src="/branding/discord-mark.svg" alt="discord"> Image
            </template>
            <template #default>
              Content
            </template>
          </o-accordion>
        </o-card>
        <c-code
          lang="template"
          :code="templateCode"
        />
      </o-card>
    </o-card>
  </o-card>
</template>

<script
  setup
  lang="ts"
>
import {
  OIcon,
  OAccordion,
  OCard,
  OTabMenu
} from 'oreum-ui'
import componentTopMenuTabs from '@/utils/componentTopMenuTabs.ts'
import { ref } from 'vue'
import CCode from '@/components/components/CCode.vue'

const tab = ref(componentTopMenuTabs[0].id)

const basicCode = `<o-accordion header="Header">
  Accordion content.
</o-accordion>`

const disabledCode =`<o-accordion
  header="Disabled Header"
  disabled
>
  Content Disabled
</o-accordion>`

const templateCode = `<o-accordion>
  <template #header>
    <OIcon
      icon="components"
    /> Icon
  </template>
  <template #default>
    Content
  </template>
</o-accordion>
<o-accordion>
  <template #header>
    <img width="24" src="/branding/discord-mark.svg" alt="discord"> Image
  </template>
  <template #default>
    Content
  </template>
</o-accordion>`
</script>

<style
  scoped
  lang="scss"
>

</style>