<template>
  <OCard
    :class="['c-code', { 'c-code_clear': clear }]"
    :clear="clear"
  >
    <highlightjs
      :language="lang === 'template' ? 'html' : lang"
      :code="code"
    />
    <span
      v-if="!clear"
      class="c-code__lang"
    >{{ lang }}</span>
  </OCard>
</template>

<script lang="ts" setup>
import { OCard } from 'oreum-ui'

defineProps<{
  code: string,
  lang: string,
  clear?: boolean
}>()
</script>

<style lang="scss">
.c-code {
  position: relative;
  padding: 12px 24px;

  code,
  pre {
    margin: 0;
    padding: 0 !important;
    background-color: var(--current-background-color);
  }

  &__lang {
    position: absolute;
    right: 16px;
    top: -4px;
    color: var(--description-color);
    font-weight: bold;
  }

  &_clear.c-code {
    padding: 0;

    &.c-code,
    pre,
    code {
      background-color: transparent;
    }
  }
}
</style>
