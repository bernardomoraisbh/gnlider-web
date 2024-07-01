<template>
  <q-drawer v-model="cartStore.rightDrawerCartOpen" side="right" elevated>
    <!-- drawer content -->
  </q-drawer>
</template>

<script setup lang="ts">
  import { useCartStore } from "../stores/cart";

  const cartStore = useCartStore();
</script>
