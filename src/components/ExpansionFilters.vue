<template>
  <q-expansion-item
    v-model="expanded"
    label="Marcas"
    >
    <q-card>
      <q-card-section>
        <q-option-group
          v-model="group"
          :options="transformedOptions"
          type="checkbox"
          />
        <q-btn @click="toggleOptions" class="show-more-btn" v-if="!showMoreBrands">
          Mostrar mais
          <q-icon name="keyboard_arrow_down" class="q-ml-sm" />
        </q-btn>
        <q-btn @click="toggleOptions" class="show-more-btn" v-else>
          Mostrar menos
          <q-icon name="keyboard_arrow_up" class="q-ml-sm" />
        </q-btn>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script setup lang="ts">
  import { Brand } from "src/interfaces/brand";
  import { computed, ref } from "vue";
  import brands from "../mocks/brands.json"; // Import the JSON file containing the products

  defineOptions({
    name: "ExpansionFilters",
  });

  const group = ref(["op1"]);
  const expanded = ref(true);
  const showMoreBrands = ref(false);
  const brandsVal = ref<Brand[]>(brands as Brand[]);

  const transformedOptions = computed(() => (showMoreBrands.value
    ? brandsVal.value.map((brand) => ({
      label: brand.name,
      value: brand.id,
      disable: false, // or set this based on some condition
    }))
    : brandsVal.value.slice(0, 5).map((brand) => ({
      label: brand.name,
      value: brand.id,
      disable: false, // or set this based on some condition
    }))));

  const toggleOptions = () => {
    showMoreBrands.value = !showMoreBrands.value;
  };
</script>
