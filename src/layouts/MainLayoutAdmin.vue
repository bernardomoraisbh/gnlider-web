<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated>
      <q-toolbar class="header">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
          />
        <div class="header-actions" v-if="!isMobile">
          <img
            src="~assets/logo_full.svg"
            height="80"
            width="80"
            @click="homeRedirect"
            style="cursor: pointer;"
            />
        </div>
        <div class="header-actions">
          <HelpMenu />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <q-list>
        <q-item-label header>GN Líder Admin</q-item-label>
        <q-item
          v-for="item in navigationItems"
          :key="item.label"
          clickable
          @click="navigateTo(item.path)"
          class="nav-card"
          >
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-btn
        v-if="!isMobile"
        class="dark-mode-btn"
        fab
        :icon="iconeModoCor"
        :label="textoModoCor"
        @click="atualizarModoCores"
        />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { useQuasar } from "quasar";
  import { computed, ref } from "vue";
  import { useRouter } from "vue-router";
  import HelpMenu from "../components/HelpMenu.vue";
  import { useScreenInfo } from "../composables/deviceComposable";

  const { isMobile } = useScreenInfo();
  const router = useRouter();
  const $q = useQuasar();

  defineOptions({
    name: "MainLayoutAdmin",
  });

  const leftDrawerOpen = ref(false);

  const homeRedirect = () => {
    router.push({ path: "/" });
  };

  const navigationItems = [
    { label: "Home", path: "/management" },
    { label: "Marcas", path: "/management/brands" },
    { label: "Categorias de Produtos", path: "/management/product-category" },
    { label: "SubCategorias de Produtos", path: "/management/product-subcategory" },
    { label: "Tipos de Produtos", path: "/management/product-types" },
    { label: "Produtos", path: "/management/products" },
    { label: "Variantes dos Produtos", path: "/management/products-variants" },
    { label: "Ordens de Compras", path: "/management/orders" },
    { label: "Usuários Externos", path: "/management/external-users" },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigateTo = (path: any) => {
    router.push(path);
  };

  const atualizarModoCores = () => {
    $q.dark.set(!$q.dark.isActive);
  };

  const textoModoCor = computed(() => ($q.dark.isActive ? "Modo Claro" : "Modo Escuro"));

  const iconeModoCor = computed(() => ($q.dark.isActive ? "light_mode" : "dark_mode"));
</script>

<style scoped>
.header {
  justify-content: space-between;
  align-items: center;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.nav-card {
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
  background-color: var(--q-color-grey-1);
  color: var(--q-color-primary);
}

.nav-card:hover {
  background-color: var(--q-color-primary-lighten);
  color: var(--q-color-dark);
}

.q-dark .nav-card {
  background-color: var(--q-color-dark);
  color: var(--q-color-primary);
}

.q-dark .nav-card:hover {
  background-color: var(--q-color-primary);
  color: var(--q-color-grey-1);
}

.dark-mode-btn {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
}
</style>
