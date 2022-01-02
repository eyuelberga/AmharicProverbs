<script setup>
defineProps({ border: { type: Boolean, default: true } });
</script>
<template>
  <div :class="`row ${border ? 'card' : ''} p-4 background`">
    <h2 class="text-center">
      {{ $t("loading") }}
    </h2>
  </div>
</template>
<style scoped>
.background {
  background-color: #d7f1f6;
}
</style>
