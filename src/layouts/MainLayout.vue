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
        <div class="header-actions" v-if="!isMobile">
          <img src="~assets/logo_full.svg" height="80" width="80"/>
        </div>
        <div class="header-actions">
          <LoginMenu />
          <HelpMenu />
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
  import HelpMenu from "../components/HelpMenu.vue";
  import LoginMenu from "../components/LoginMenu.vue";
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
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.header-container {
  display: flex; /* Allow header and search bar to fit side-by-side */
  margin-bottom: 2px;
}

.custom-placeholder-color::placeholder {
  color: white !important; /* Change the placeholder text color here */
}
</style>
