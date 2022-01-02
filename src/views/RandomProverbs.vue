<script>
import Proverb from "../components/ProverbCard.vue";
import Error from "../components/ErrorCard.vue";
import Loader from "../components/Loader.vue";
import { onMounted, ref } from "vue";
import useProverbsAPI from "../composables/useProverbsAPI";
export default {
  components: { Proverb, Error, Loader },
  setup() {
    const { random, result, error, loading } = useProverbsAPI();
    onMounted(async () => {
      await random();
    });
    return { result, random, error, loading };
  },
};
</script>

<template>
  <div class="random-container mx-auto">
    <transition enter-active-class="animate__animated animate__fadeIn">
      <Error v-if="error" :message="error.message" key="error" />
      <Proverb
        v-else
        :proverb="result.proverb"
        :onReset="random"
        :loading="loading"
        key="proverb"
      />
    </transition>
  </div>
</template>
<style scoped>
.random-container {
  max-width: 42em;
}
</style>
