<template>
  <c-component-doc
    name="Accordion"
    :props="props"
    :emits="emits"
    :slots="slots"
    :exposes="exposes"
  >
    <template #features>
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
          :code="code.basic"
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
          :code="code.disabled"
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
              <o-icon icon="components" />
              Icon
            </template>
            I'm already open
          </o-accordion>
          <o-accordion>
            <template #header>
              <img width="24" src="/branding/discord-mark.svg" alt="discord"> Image
            </template>
            Content
          </o-accordion>
        </o-card>
        <c-code
          lang="template"
          :code="code.template"
        />
      </o-card>

      <o-card
        tag="section"
        clear
      >
        <h2>Without Header</h2>
        <o-card class="o-card_content">
          <o-button
            primary
            @click="toggle"
          >
            Toggle
          </o-button>
          <o-accordion v-model="opened">
            Accordion without header
          </o-accordion>
        </o-card>
        <c-code
          lang="template"
          :code="code.template"
        />
      </o-card>
    </template>
  </c-component-doc>
</template>

<script
  setup
  lang="ts"
>
import {
  OIcon,
  OAccordion,
  OButton,
  OCard
} from 'oreum-ui'
import CCode from '@/components/components/CCode.vue'
import CComponentDoc from '@/components/components/CComponentDoc.vue'
import { ref } from 'vue'

const props = [
  {
    name: 'class',
    type: 'string | object | Array',
    default: 'void',
    description: `Defines 'class' attribute of root element.`
  },
  {
    name: 'modelValue',
    type: 'boolean',
    default: 'void',
    description: 'Defines open state of Accordion.'
  },
  {
    name: 'timeout',
    type: 'number | [number, number]',
    default: '250',
    description: `Timeout of close and open animations.`
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: `Disables header button.`
  },
  {
    name: 'header',
    type: 'string',
    default: `'Default'`,
    description: `Text displayed inside Accordion header if no 'header' slot defined.`
  },
  {
    name: 'preOpened',
    type: 'boolean',
    default: 'false',
    description: 'If true Accordion will be opened by default.'
  }
]
const emits = [
  {
    name: `@update:model-value`,
    arguments: 'boolean | void',
    description: `Emits when button is toggled.`
  }
]
const slots = [
  {
    name: 'default',
    props: 'void',
    description: 'Accordion Contents'
  },
  {
    name: 'header',
    props: 'void',
    description: 'Accordion header Contents'
  },
  {
    name: 'custom-header',
    props: `{ disabled: boolean }`,
    description: 'Custom accordion header'
  }
]
const exposes = void 0

const opened = ref(false)

function toggle () {
  opened.value = !opened.value
}

const code = {
  basic: `<o-accordion header="Header">
  Accordion content.
</o-accordion>`,
  disabled: `<o-accordion
  header="Disabled Header"
  disabled
>
  Content Disabled
</o-accordion>`,
  template: `<o-accordion>
  <template #header>
    <OIcon icon="components" /> Icon
  </template>
  Content
</o-accordion>
<o-accordion>
  <template #header>
    <img width="24" src="/branding/discord-mark.svg" alt="discord"> Image
  </template>
  Content
</o-accordion>`
} as const
</script>

<style
  scoped
  lang="scss"
>

</style>