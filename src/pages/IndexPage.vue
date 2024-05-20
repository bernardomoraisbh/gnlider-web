<template>
  <q-page class="row items-center justify-evenly">
    <q-layout>
      <q-drawer v-model="showFilterBar" docked="left">
        <div class="q-pa-lg">
          <h6 >Filtrar por</h6>
          <q-form class="q-gutter-md">
            <ExpansionFilters />
          </q-form>
        </div>
      </q-drawer>
      <q-page-container>
        <div class="product-list">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
        <div class="q-pa-lg">
          <div class="row items-center justify-evenly">
            <q-pagination
              v-model="current"
              max="55"
              max-pages="6"
              direction-links
              flat
              color="grey"
              active-color="primary"
              />
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script setup lang="ts">
  import ExpansionFilters from "components/ExpansionFilters.vue";
  import ProductCard from "components/ProductCard.vue";
  import { Product } from "src/interfaces/product";
  import { ref } from "vue";
  import productsData from "../mocks/products.json"; // Import the JSON file containing the products

  defineOptions({
    name: "IndexPage",
  });

  const showFilterBar = ref(true);
  const products = ref<Product[]>(productsData as Product[]);
  const current = ref(1);

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
