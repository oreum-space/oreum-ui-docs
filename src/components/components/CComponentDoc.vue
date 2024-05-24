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
      <h1>{{ name }}</h1>
      <slot name="features" />
    </o-card>
    <o-card
      v-show="tab === 1"
      clear
    >
      <h1>{{ name }} API</h1>
      <p>API defines helper props, emits, slots and exposes for the OreumUI Accordion module.</p>
      <slot name="api" />
      <o-card v-if="componentProps" tag="section" clear>
        <h2>Props</h2>
        <p>Defines valid props in {{ name }} component.</p>
        <o-table v-bind="componentProps">
          <template #row-name="{ value }"><code>{{ value }}</code></template>
          <template #row-type="{ value }"><c-code :code="value" lang="ts" clear /></template>
          <template #row-default="{ value }"><c-code :code="value" lang="ts" clear /></template>
        </o-table>
      </o-card>
      <o-card v-if="componentEmits" tag="section" clear>
        <h2>Emits</h2>
        <p>Defines valid emits in {{ name }} component.</p>
        <o-table v-bind="componentEmits">
          <template #row-name="{ value }"><code>{{ value }}</code></template>
          <template #row-arguments="{ value }"><c-code :code="value" lang="ts" clear /></template>
        </o-table>
      </o-card>
      <o-card v-if="componentSlots" tag="section" clear>
        <h2>Props</h2>
        <p>Defines valid slots in {{ name }} component.</p>
        <o-table v-bind="componentSlots">
          <template #row-name="{ value }"><code>{{ value }}</code></template>
          <template #row-props="{ value }"><c-code :code="value" lang="ts" clear /></template>
        </o-table>
      </o-card>
      <o-card v-if="componentExposes" tag="section" clear>
        <h2>Props</h2>
        <p>Defines valid exposes in {{ name }} component.</p>
        <o-table v-bind="componentExposes">
          <template #row-name="{ value }"><code>{{ value }}</code></template>
          <template #row-type="{ value }"><c-code :code="value" lang="ts" clear /></template>
        </o-table>
      </o-card>
    </o-card>
    <o-card
      v-show="tab === 2"
      clear
    >
      <h1>{{ name }} Playground</h1>
      <slot name="playground" />
    </o-card>
  </o-card>
</template>

<script
  setup
  lang="ts"
>
import {
  OCard,
  OTabMenu,
  OTable
} from 'oreum-ui'
import { computed, ref } from 'vue'
import componentTopMenuTabs from '@/utils/componentTopMenuTabs.ts'
import CCode from '@/components/components/CCode.vue'

interface ApiTableColumn<Key extends string> {
  label: Key,
  key: Lowercase<Key>
}

type ApiTableColumns<Key extends string> = Array<ApiTableColumn<Key>>

interface ApiTable<Key extends string> {
  columns: ApiTableColumns<Key>
  rows: Array<Record<Lowercase<Key>, string>>
}

type PropsApiTable = ApiTable<'Name' | 'Type' | 'Default' | 'Description'>
type EmitsApiTable = ApiTable<'Name' | 'Arguments' | 'Description'>
type SlotsApiTable = ApiTable<'Name' | 'Props' | 'Description'>
type ExposesApiTable = ApiTable<'Name' | 'Type' | 'Description'>

interface Props {
  name?: string,
  props?: PropsApiTable['rows'],
  emits?: EmitsApiTable['rows'],
  slots?: SlotsApiTable['rows'],
  exposes?: ExposesApiTable['rows']
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Name',
  props: void 0,
  emits: void 0,
  slots: void 0,
  exposes: void 0
})

const tab = ref(componentTopMenuTabs[0].id)
const componentProps = computed(() => props.props ? ({
  columns: (['Name', 'Type', 'Default', 'Description'] as const).map(_ => ({ label: _, key: _.toLowerCase() })),
  rows: props.props
}) as PropsApiTable: void 0)
const componentEmits = computed(() => props.emits ? ({
  columns: (['Name', 'Arguments', 'Description'] as const).map(_ => ({ label: _, key: _.toLowerCase() })),
  rows: props.emits
}) as EmitsApiTable: void 0)
const componentSlots = computed(() => props.slots ? ({
  columns: (['Name', 'Props', 'Description'] as const).map(_ => ({ label: _, key: _.toLowerCase() })),
  rows: props.slots
}) as SlotsApiTable: void 0)
const componentExposes = computed(() => props.exposes ? ({
  columns: (['Name', 'Type', 'Description'] as const).map(_ => ({ label: _, key: _.toLowerCase() })),
  rows: props.exposes
}) as ExposesApiTable: void 0)
</script>