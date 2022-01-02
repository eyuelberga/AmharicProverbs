<script>
import { ref, computed } from "vue";
import Input from "../components/InputKeywrite.vue";
import Loader from "../components/Loader.vue";
import Proverb from "../components/ProverbCard.vue";
import Error from "../components/ErrorCard.vue";
import useProverbsAPI from "../composables/useProverbsAPI";

export default {
  components: { Input, Proverb, Error, Loader },
  setup() {
    const searchInput = ref("");
    const words = computed(() => {
      return searchInput.value.replace(" ", ",");
    });
    const { search, result, loading, error } = useProverbsAPI();

    return { searchInput, search, result, loading, error, words };
  },
};
</script>

<template>
  <div class="search-container mx-auto mb-auto my-4">
    <div class="d-flex justify-content-center gap-1 flex-column mb-2">
      <Input
        :placeholder="$t('search-placeholder')"
        v-model="searchInput"
        type="search"
        :onReturn="
          () => {
            search(words);
          }
        "
      />
    </div>

    <Error v-if="error" :message="error.message" />
    <div
      class="card p-4 text-center"
      v-if="!result.proverbs.length && result.keywords && !loading && !error"
    >
      <h1>
        <i class="bi bi-search"></i><br /><span
          class="px-2"
          style="background-color: #d7f1f6"
          >{{ $t("not-found") }}</span
        >
      </h1>
    </div>

    <div v-if="result.proverbs.length" class="d-grid">
      <transition-group
        tag="div"
        enter-active-class="animate__animated animate__slideInUp"
      >
        <Proverb
          v-for="proverb in result.proverbs"
          :key="proverb"
          :proverb="proverb"
        />
      </transition-group>
      <button
        class="btn"
        :disabled="result.complete"
        v-if="!loading"
        @click="
          () => {
            // increment the page by one
            result.page = result.page + 1;
            search(result.keywords, result.page, false);
          }
        "
      >
        {{ $t("load-more") }}
      </button>
    </div>
    <Loader v-if="loading" />
  </div>
</template>
<style scoped>
.search-container {
  max-width: 42em;
}
</style>
