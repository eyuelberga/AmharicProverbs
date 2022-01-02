<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container d-flex py-3 flex-column h-100">
    <Header />
    <main class="mx-2">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<style>
.btn {
  padding: 0.5rem 0.8rem;
  margin-bottom: 0.3rem;
  border-radius: 0.5rem;
  font-weight: 700;
  border: 0.15rem rgba(0, 0, 0, 0.8) solid;
  border-right-width: 0.3rem;
  border-bottom-width: 0.3rem;
  background: rgba(256, 256, 256, 1);
  color: #232d2f;
}

.btn:hover {
  background: #d7f1f6;
}

input {
  padding: 0.5rem 0.8rem;
  margin-bottom: 0.3rem;
  border-radius: 0.5rem;
  font-weight: 700;
  border: 0.15rem rgba(0, 0, 0, 0.8) solid;
  border-right-width: 0.3rem;
  border-bottom-width: 0.3rem;
}

.card {
  border: 0.15rem rgba(0, 0, 0, 0.8) solid;
  border-bottom-width: 0.3rem;
  border-radius: 1rem;
}

#app {
  height: 100vh;
}
</style>
