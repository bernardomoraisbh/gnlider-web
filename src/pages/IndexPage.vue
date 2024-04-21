<template>
  <q-page class="row items-center justify-evenly">
    <q-layout>
      <q-drawer v-model="showFilterBar" docked="left">
        <div class="filter-bar">
          <h3 class="filter-title">Filtrar por</h3>
          <q-input v-model="filterGroup" placeholder="Grupo" dense />
          <q-select v-model="filterCategory" label="Categoria" :options="categories">
            <template v-slot:option="{ opt }">
              {{ opt.label }}
            </template>
          </q-select>
          <span class="item-count">Itens 1-24 de 55</span>
        </div>
      </q-drawer>
      <q-page-container>
        <div class="product-list">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script setup lang="ts">
  import ProductCard from "components/ProductCard.vue";
  import { Product } from "src/interfaces/product";
  import { ref } from "vue";
  import productsData from "../mocks/products.json"; // Import the JSON file containing the products

  defineOptions({
    name: "IndexPage",
  });

  interface Option {
    value: string;
    label: string;
  }

  const showFilterBar = ref(true);
  const filterGroup = ref("");
  const filterCategory = ref("");
  const categories = ref<Option[]>([
    { value: "cat1", label: "Categoria 1" },
    { value: "cat2", label: "Categoria 2" },
    { value: "cat3", label: "Categoria 3" },
  ]);
  const products = ref<Product[]>(productsData as Product[]);

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
