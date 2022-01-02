<script setup>
import Loader from "./Loader.vue";
defineProps({
  proverb: String,
  onReset: Function,
  loading: { type: Boolean, default: false },
});
</script>

<template>
  <div class="my-2 card p-2">
    <div v-if="loading" class="m-4 rounded">
      <Loader :border="false" />
    </div>
    <h1 v-else class="text-center my-2 fw-bold">
      {{ proverb }}
    </h1>

    <div class="row">
      <div class="col">
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
        >
          <a
            v-show="!loading"
            class="btn mx-1"
            target="_blank"
            :href="`https://www.facebook.com/sharer/sharer.php?u=eyuelberga.github.io/AmharicProverbs&quote=${proverb}`"
          >
            <i style="font-size: 1.5rem" class="bi bi-facebook mx-1"></i>
          </a>
        </transition>
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
        >
          <a
            v-show="!loading"
            class="btn mx-1"
            target="_blank"
            :href="`https://twitter.com/intent/tweet?text=${proverb}&via=eyuelbergaw`"
          >
            <i style="font-size: 1.5rem" class="bi bi-twitter mx-1"></i>
          </a>
        </transition>
      </div>
      <div v-if="onReset" class="col justify-content-end d-flex">
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
        >
          <button v-show="!loading" class="btn" @click="onReset">
            <i style="font-size: 1.5rem" class="bi bi-arrow-clockwise mx-1"></i>
          </button>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.proverb-card {
  padding: 2rem;
  min-width: 50vw;
  border: 1rem rgba(0, 0, 0, 0.8) soild;
}
</style>
