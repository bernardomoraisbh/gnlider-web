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
            />
        </div>
        <q-btn label="Cadastrar novo tipo de produto"
               color="primary" @click="showCreateDialog = true" />
      </q-card-section>
      <q-card-section>
        <q-table
          :rows="filteredProductTypes"
          :columns="columns"
          row-key="id"
          >
          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <q-btn flat label="Editar" @click="editProductType(props.row)" />
              <q-btn flat label="Deletar" color="negative"
                     @click="deleteProductType(props.row.id)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="showCreateDialog">
      <q-card>
        <q-card-section>
          <q-input v-model="newProductType.name" label="Nome" filled />
          <q-input v-model="newProductType.description" label="Descrição" filled />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Cancelar" @click="showCreateDialog = false" />
          <q-btn label="Salvar" color="primary" @click="createProductType" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showEditDialog">
      <q-card>
        <q-card-section>
          <q-input v-model="currentProductType.name" label="Nome" filled />
          <q-input v-model="currentProductType.description" label="Descrição" filled />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Cancelar" @click="showEditDialog = false" />
          <q-btn label="Salvar" color="primary" @click="updateProductType" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
  import { QBtn, QCard, QCardActions, QCardSection, QDialog, QInput, QTable, QTd } from "quasar";
  import { ProductType } from "src/interfaces/productType";
  import productTypesData from "src/mocks/productTypes.json";
  import { computed, reactive, ref } from "vue";

  const productTypes = ref<ProductType[]>(productTypesData as ProductType[]);

  const searchTerm = ref("");
  const showCreateDialog = ref(false);
  const showEditDialog = ref(false);
  const newProductType = reactive<ProductType>({ id: 0, name: "", description: "" });
  const currentProductType = reactive<ProductType>({ id: 0, name: "", description: "" });

  // eslint-disable-next-line max-len
  const filteredProductTypes = computed(() => productTypes.value.filter((productType) => productType.name.toLowerCase().includes(searchTerm.value.toLowerCase())));

  const columns: {
    name: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field: string | ((row: ProductType) => any); // Remove optional field
    align?: "right" | "left" | "center";
  }[] = [
    { name: "name", label: "Nome", align: "left", field: "name" },
    { name: "description", label: "Descrição", align: "left", field: "description" },
    { name: "action", label: "Ações", align: "center", field: "action" },
  ];

  function createProductType(){
    productTypes.value.push({ ...newProductType });
    newProductType.name = "";
    newProductType.description = "";
    showCreateDialog.value = false;
  }

  function editProductType(productType: ProductType){
    Object.assign(currentProductType, productType);
    showEditDialog.value = true;
  }

  function updateProductType(){
    const index = productTypes.value.findIndex((c) => c.id === currentProductType.id);
    if (index !== -1){
      productTypes.value[index] = { ...currentProductType };
    }
    showEditDialog.value = false;
  }

  function deleteProductType(id: number){
    const index = productTypes.value.findIndex((c) => c.id === id);
    if (index !== -1){
      productTypes.value.splice(index, 1);
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
