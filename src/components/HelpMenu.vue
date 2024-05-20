<template>
  <div class="q-pa-md">
    <q-btn flat label="Ajuda" icon="help">
      <q-menu>
        <q-list style="min-width: 100px">
          <q-item to="/contato" clickable v-close-popup>
            <q-item-section avatar>
              <q-icon name="mail" />
            </q-item-section>

            <q-item-section>
              Contato
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup exact @click="atualizarModoCores()">
            <q-item-section avatar>
              <q-icon :name="iconeModoCor" />
            </q-item-section>

            <q-item-section>
              {{ textoModoCor }}
            </q-item-section>
          </q-item>
          <q-separator />
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
  import { useQuasar } from "quasar";
  import { computed } from "vue";

  defineOptions({
    name: "HelpMenu",
  });

  const $q = useQuasar();
  const atualizarModoCores = () => {
    $q.dark.set(!$q.dark.isActive);
  };

  const textoModoCor = computed(() => {
    if (!$q.dark.isActive){
      return "Modo Escuro";
    }
    return "Modo Claro";
  });

  const iconeModoCor = computed(() => {
    if (!$q.dark.isActive){
      return "dark_mode";
    }
    return "light_mode";
  });
</script>
