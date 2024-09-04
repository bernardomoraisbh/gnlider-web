<template>
  <q-page class="q-pa-md">
    <q-layout>
      <q-page-container>
        <div class="card-grid">
          <q-card
            class="card"
            @click="navigateTo('/management/brands')"
            flat
            bordered
            >
            <q-card-section>
              <div class="text-h6">Marcas</div>
              <div>Gerenciar marcas</div>
            </q-card-section>
          </q-card>

          <q-card
            class="card"
            @click="navigateTo('/management/product-category')"
            flat
            bordered
            >
            <q-card-section>
              <div class="text-h6">Categorias de Produtos</div>
              <div>Gerenciar categorias dos produtos</div>
            </q-card-section>
          </q-card>

          <q-card
            class="card"
            @click="navigateTo('/management/product-subcategory')"
            flat
            bordered
            >
            <q-card-section>
              <div class="text-h6">SubCategorias de Produtos</div>
              <div>Gerenciar subcategorias dos produtos</div>
            </q-card-section>
          </q-card>

          <q-card
            class="card"
            @click="navigateTo('/management/product-types')"
            flat
            bordered
            >
            <q-card-section>
              <div class="text-h6">Tipos de Produtos</div>
              <div>Gerenciar tipos de produtos</div>
            </q-card-section>
          </q-card>

          <q-card
            class="card"
            @click="navigateTo('/management/products')"
            flat
            bordered
            >
            <q-card-section>
              <div class="text-h6">Produtos</div>
              <div>Gerenciar produtos</div>
            </q-card-section>
          </q-card>

          <q-card
            class="card"
            @click="navigateTo('/management/products-variants')"
            flat
            bordered
            >
            <q-card-section>
              <div class="text-h6">Variantes dos Produtos</div>
              <div>Gerenciar as variantes dos produtos</div>
            </q-card-section>
          </q-card>

          <q-card
            class="card"
            @click="navigateTo('/management/orders')"
            flat
            bordered
            >
            <q-card-section>
              <div class="text-h6">Ordens de Compras</div>
              <div>Gerenciar as ordens de compras dos usuários</div>
            </q-card-section>
          </q-card>

          <q-card
            class="card"
            @click="navigateTo('/management/external-users')"
            flat
            bordered
            >
            <q-card-section>
              <div class="text-h6">Usuários Externos</div>
              <div>Gerenciar usuários externos</div>
            </q-card-section>
          </q-card>
        </div>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";

  const router = useRouter();

  function navigateTo(path: string){
    router.push(path);
  }

  defineOptions({
    name: "AdminIndexPage",
  });
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  justify-items: center;
}

.card {
  cursor: pointer;
  width: 300px;
  height: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}
</style>
