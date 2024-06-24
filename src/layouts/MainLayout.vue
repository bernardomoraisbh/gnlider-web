<template>
  <q-layout view="lHh Lpr fff">
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

    <q-footer elevated class="bg-blue-8 text-white">
      <q-toolbar class="footer-toolbar">
        <div class="footer-section"/>
        <div class="footer-section">
          <div>
            <h4>Contato</h4>
            <p><i class="fa fa-phone"/> Telefone: (31) 9 9476-0839</p>
            <p><i class="fab fa-whatsapp"/> WhatsApp: <a href="https://wa.me/5531994760839" target="_blank">(31) 9 9476-0839</a></p>
            <p><i class="fa fa-envelope"/> Email: gnlider@gnlider.com.br</p>
          </div>
        </div>
        <div class="footer-section">
          <div>
            <h4>Informações da Empresa</h4>
            <p>Endereço: Av. Ivaí, 226 - Dom Bosco, Belo Horizonte, MG, CEP 12345-678</p>
            <p>CNPJ: 35.006.646/0001-60</p>
          </div>
        </div>
        <div class="footer-section">
          <div>
            <h4>Siga-nos</h4>
            <q-btn flat round dense icon="fab fa-instagram" href="https://www.instagram.com/gnlidermedical?igsh=MTFlZXQwZGU4azMzNA%3D%3D" target="_blank"/>
          </div>
        </div>
      </q-toolbar>
    </q-footer>

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

.footer-toolbar {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
}

.footer-section {
  flex: 1;
  margin: 10px;
}

.footer-title {
  display: flex;
  align-items: center;
}

.footer-section h4 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #f0c14b;
}

.footer-section p,
.footer-section a {
  font-size: 14px;
  line-height: 1.6;
  color: #ddd;
  text-decoration: none;
}

.footer-section a:hover {
  color: #f0c14b;
}

.footer-section i {
  margin-right: 10px;
}

@media (max-width: 768px) {
  .footer-toolbar {
    flex-direction: column;
    text-align: center;
  }

  .footer-section {
    margin: 20px 0;
  }
}
</style>
