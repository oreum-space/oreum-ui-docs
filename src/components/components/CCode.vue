<template>
  <OCard class="c-code">
    <highlightjs
      :language="lang === 'template' ? 'html' : lang"
      :code="code"
    />
    <span class="c-code__lang">{{ lang }}</span>
  </OCard>
</template>

<script lang="ts" setup>
import { OCard } from 'oreum-ui'

defineProps<{
  code: string,
  lang: string
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
}
</style>
