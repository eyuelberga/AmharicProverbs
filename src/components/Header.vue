<script></script>
<template>
  <header class="mb-auto text-center">
    <div>
      <h3 class="float-md-start mb-2 logo">
        <span class="fw-bold">{{ $t("amharic") }}</span> {{ $t("proverbs") }}
      </h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <router-link class="nav-link px-2" to="/" active-class="active"
          ><i class="bi bi-shuffle mx-1"></i>{{ $t("random") }}</router-link
        >
        <router-link class="nav-link px-2" to="/search" active-class="active"
          ><i class="bi bi-search mx-1"></i> {{ $t("search") }}</router-link
        >
        <select class="nav-link px-2" v-model="$i18n.locale">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.nav-link {
  padding: 0.25rem 0.25rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  border: 0.1rem solid rgba(0, 0, 0, 0.5);
  border-bottom-width: 0.25rem;
  border-right-width: 0.25rem;
  border-radius: 0.5rem;
  margin-left: 1rem;
}

.nav-link:hover,
.nav-link:focus {
  color: rgba(0, 0, 0, 0.8);
}

.active {
  background-color: #b0e3ee;
  border-bottom-color: #003132;
  border-right-color: #003132;
}
.logo {
  border: 0.2rem #232d2f solid;
  padding: 0.5rem;
  border-radius: 1rem;
  border-bottom-width: 0.5rem;
  border-right-width: 0.5rem;
  background-color: #b0e3ee;
  color: #232d2f;
}
</style>
