<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="header">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
          v-if="isMobile"
          />
        <q-toolbar-title v-if="!isMobile">
          Dentistas
        </q-toolbar-title>
        <q-toolbar-title v-if="!isMobile">
          Equipamentos
        </q-toolbar-title>
        <div class="header-actions">
          <q-btn flat label="Entrar" icon="person" />
          <q-btn flat label="Ajuda" icon="help" />
        </div>
      </q-toolbar>
      <div class="header-container">
        <q-toolbar>
          <q-toolbar-title>
            <q-btn flat label="Categorias" icon="category" />
          </q-toolbar-title>
          <q-input
            v-model="searchTerm"
            label-color="inherit"
            placeholder="Buscar..."
            rounded
            outlined
            class="custom-placeholder-color"
            :input-style="{ color: 'white' }"
            color="white"
            >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn flat label="Carrinho" icon="shopping_cart" />
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header>
          GN Líder
        </q-item-label>
        <!--TODO ADICIONAR MENUS LATERAIS MOBILE-->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useScreenInfo } from "../composables/deviceComposable";

  const { isMobile } = useScreenInfo();

  defineOptions({
    name: "MainLayout",
  });

  const leftDrawerOpen = ref(false);

  const searchTerm = ref("");
</script>

<style scoped>
.header {
  /* Add your styling for the header section here */
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.header-container {
  display: flex; /* Allow header and search bar to fit side-by-side */
  margin-bottom: 4px;
}

.custom-placeholder-color::placeholder {
  color: white !important; /* Change the placeholder text color here */
}
</style>
