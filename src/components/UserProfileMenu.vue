<template>
  <div class="q-pa-md">
    <q-btn flat round dense icon="account_circle" label="Nome">
      <q-menu>
        <q-list style="min-width: 150px">
          <q-item tag="a" @click="navigateTo('/profile')" clickable v-close-popup>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
            <q-item-section>
              Meu Perfil
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item tag="a" @click="navigateTo('/settings')" clickable v-close-popup>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>
              Configurações
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item tag="a" @click="navigateTo('/logout')" clickable v-close-popup>
            <q-item-section avatar>
              <q-icon name="exit_to_app" />
            </q-item-section>
            <q-item-section>
              Sair
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";

  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigateTo = (path: any) => {
    router.push(path);
  };
</script>

<style scoped>
/* Customize the profile menu button and dropdown style */
.q-btn {
  color: var(--q-color-primary);
}

.q-item:hover {
  background-color: var(--q-color-primary-lighten);
}
</style>
