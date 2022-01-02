<script setup>
defineProps({
  message: String,
});
</script>
<template>
  <div class="card p-4 text-center">
    <h1>
      <i class="bi bi-exclamation-circle"></i><br />
      <span class="px-2" style="background-color: #ffa5a5">{{
        $t("error")
      }}</span>
    </h1>
    <p class="fw-bold">{{ message }}</p>
  </div>
</template>
