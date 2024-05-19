<template>
  <components-navigation />
  <main :class="['v-components', $props.class]">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <component
          :is="Component"
          class="v-components__view"
        />
      </template>
      <section v-else>
        <h1>Components</h1>
        <router-link to="/components/avatar">
          VComponentsAvatar
        </router-link>
      </section>
    </router-view>
  </main>
</template>

<script
  setup
  lang="ts"
>
import ComponentsNavigation from '@/components/components/ComponentsNavigation.vue'

defineProps<{ class: string }>()
</script>

<style lang="scss">
.v-components {
  display: flex;
  flex-flow: row nowrap;

  &__view {
    padding-inline: 280px;
    width: 100%;
    @media (max-width: 1280px) { padding-inline: 280px 24px }
    @media (max-width: 1024px) { padding-inline: 24px }

    .o-card_clear {
      padding: 12px 0;
    }

    .o-card_content {
      padding: 24px;
    }

    code {
      display: block;
      overflow: auto;
      unicode-bidi: isolate;
      white-space: pre;
    }
  }

  section h1 {
    margin-block: 24px;
  }
}
</style>