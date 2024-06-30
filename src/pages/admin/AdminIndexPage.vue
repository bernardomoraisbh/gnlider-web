<template>
  <q-page class="row items-center justify-evenly">
    <q-layout>
      <q-page-container>
        a
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script setup lang="ts">
  // import { ref } from "vue";

  defineOptions({
    name: "AdminIndexPage",
  });

</script>

<style scoped>
.content-wrapper {
  display: flex;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.product-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
