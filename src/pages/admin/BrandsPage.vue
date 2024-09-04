<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="q-mb-md">
          <q-input
            v-model="searchTerm"
            debounce="300"
            label="Buscar por nome"
            filled
            @input="filterBrands"
            />
        </div>
        <q-btn label="Cadastrar nova marca" color="primary" @click="showCreateDialog = true" />
      </q-card-section>
      <q-card-section>
        <q-table
          :rows="filteredBrands"
          :columns="columns"
          row-key="id"
          >
          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <q-btn flat label="Editar" @click="editBrand(props.row)" />
              <q-btn flat label="Deletar" color="negative" @click="deleteBrand(props.row.id)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="showCreateDialog">
      <q-card>
        <q-card-section>
          <q-input v-model="newBrand.name" label="Nome" filled />
          <q-input v-model="newBrand.firstChar" label="First Char" filled />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Cancelar" @click="showCreateDialog = false" />
          <q-btn label="Salvar" color="primary" @click="createBrand" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showEditDialog">
      <q-card>
        <q-card-section>
          <q-input v-model="currentBrand.name" label="Nome" filled />
          <q-input v-model="currentBrand.firstChar" label="First Char" filled />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Cancelar" @click="showEditDialog = false" />
          <q-btn label="Salvar" color="primary" @click="updateBrand" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
  import { ref, reactive, computed } from "vue";
  import { QTable, QDialog, QCard, QCardSection, QCardActions, QBtn, QInput, QTd } from "quasar";
  import brandsData from "../../mocks/brands.json";
  import { Brand } from "src/interfaces/brand";

  const brands = ref<Brand[]>(brandsData as Brand[]);

  const searchTerm = ref("");
  const showCreateDialog = ref(false);
  const showEditDialog = ref(false);
  const newBrand = reactive({ name: "", firstChar: "" });
  const currentBrand = reactive({ id: 0, name: "", firstChar: "" });

  // eslint-disable-next-line max-len
  const filteredBrands = computed(() => brands.value.filter((brand) => brand.name.toLowerCase().includes(searchTerm.value.toLowerCase())));

  const columns = [
    { name: "name", label: "Nome", align: "left", field: "name" },
    { name: "action", label: "Ações", align: "center", field: "action" },
  ];

  function filterBrands(){
  // Automatically updates filteredBrands due to computed property
  }

  function createBrand(){
    const id = brands.value.length ? Math.max(...brands.value.map((b) => b.id)) + 1 : 1;
    brands.value.push({ id, ...newBrand });
    newBrand.name = "";
    newBrand.firstChar = "";
    showCreateDialog.value = false;
  }

  function editBrand(brand: Brand){
    Object.assign(currentBrand, brand);
    showEditDialog.value = true;
  }

  function updateBrand(){
    const index = brands.value.findIndex((b) => b.id === currentBrand.id);
    if (index !== -1){
      brands.value[index] = { ...currentBrand };
    }
    showEditDialog.value = false;
  }

  function deleteBrand(id: number){
    const index = brands.value.findIndex((b) => b.id === id);
    if (index !== -1){
      brands.value.splice(index, 1);
    }
  }
</script>

<style scoped>
.q-page {
  max-width: auto;
  margin: auto;
}

.q-table {
  margin-top: 1rem;
}
</style>
