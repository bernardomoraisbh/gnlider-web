<template>
  <q-layout view="hHh lpR lFf">>
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
          <img src="~assets/logo_full.svg" height="80" width="80"
               @click="homeRedirect"
               style="cursor: pointer;"/>
        </div>
        <div class="header-actions">
          <HelpMenu />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
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
  import { useRouter } from "vue-router";
  import HelpMenu from "../components/HelpMenu.vue";
  import { useScreenInfo } from "../composables/deviceComposable";

  const { isMobile } = useScreenInfo();
  const router = useRouter();

  defineOptions({
    name: "MainLayoutAdmin",
  });

  const leftDrawerOpen = ref(false);

  const homeRedirect = () => {
    router.push({ path: "/" });
  };
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
