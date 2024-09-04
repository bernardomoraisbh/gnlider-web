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
            @input="filterSubCategories"
            />
        </div>
        <q-btn label="Cadastrar nova subcategoria"
               color="primary" @click="showCreateDialog = true" />
      </q-card-section>
      <q-card-section>
        <q-table
          :rows="filteredSubCategories"
          :columns="columns"
          row-key="id"
          >
          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <q-btn flat label="Editar" @click="editSubCategory(props.row)" />
              <q-btn flat label="Deletar" color="negative"
                     @click="deleteSubCategory(props.row.id)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="showCreateDialog">
      <q-card>
        <q-card-section>
          <q-input v-model="newSubCategory.name" label="Nome" filled />
          <q-input v-model="newSubCategory.description" label="Descrição" filled />
          <q-select
            v-model="newSubCategory.productCategory"
            :options="categories"
            option-value="id"
            option-label="name"
            label="Categoria"
            filled
            />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Cancelar" @click="showCreateDialog = false" />
          <q-btn label="Salvar" color="primary" @click="createSubCategory" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showEditDialog">
      <q-card>
        <q-card-section>
          <q-input v-model="currentSubCategory.name" label="Nome" filled />
          <q-input v-model="currentSubCategory.description" label="Descrição" filled />
          <q-select
            v-model="currentSubCategory.productCategory"
            :options="categories"
            option-value="id"
            option-label="name"
            label="Categoria"
            filled
            />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Cancelar" @click="showEditDialog = false" />
          <q-btn label="Salvar" color="primary" @click="updateSubCategory" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
  import { ref, reactive, computed } from "vue";
  import { QTable, QDialog, QCard, QCardSection, QCardActions, QBtn, QInput, QTd, QSelect } from "quasar";
  import categoriesData from "src/mocks/categories.json";
  import subCategoriesData from "src/mocks/subCategories.json";
  import { ProductCategory } from "src/interfaces/productCategory";
  import { ProductSubCategory } from "src/interfaces/productSubCategory";

  const categories = ref<ProductCategory[]>(categoriesData as ProductCategory[]);
  const subCategories = ref<ProductSubCategory[]>(subCategoriesData as ProductSubCategory[]);

  const searchTerm = ref("");
  const showCreateDialog = ref(false);
  const showEditDialog = ref(false);
  const newSubCategory = reactive<ProductSubCategory>({ id: 0, name: "", description: "", productCategory: categories.value[0] });
  const currentSubCategory = reactive<ProductSubCategory>({ id: 0, name: "", description: "", productCategory: categories.value[0] });

  // eslint-disable-next-line max-len
  const filteredSubCategories = computed(() => subCategories.value.filter((subCategory) => subCategory.name.toLowerCase().includes(searchTerm.value.toLowerCase())));

  const columns = [
    { name: "name", label: "Nome", align: "left", field: "name" },
    { name: "description", label: "Descrição", align: "left", field: "description" },
    { name: "productCategory", label: "Categoria", align: "left", field: (row: ProductSubCategory) => row.productCategory.name },
    { name: "action", label: "Ações", align: "center", field: "action" },
  ];

  function filterSubCategories(){
  // Automatically updates filteredSubCategories due to computed property
  }

  function createSubCategory(){
    // eslint-disable-next-line max-len
    subCategories.value.push({ ...newSubCategory });
    newSubCategory.name = "";
    newSubCategory.description = "";
    // eslint-disable-next-line prefer-destructuring
    newSubCategory.productCategory = categories.value[0];
    showCreateDialog.value = false;
  }

  function editSubCategory(subCategory: ProductSubCategory){
    Object.assign(currentSubCategory, subCategory);
    showEditDialog.value = true;
  }

  function updateSubCategory(){
    const index = subCategories.value.findIndex((c) => c.id === currentSubCategory.id);
    if (index !== -1){
      subCategories.value[index] = { ...currentSubCategory };
    }
    showEditDialog.value = false;
  }

  function deleteSubCategory(id: number){
    const index = subCategories.value.findIndex((c) => c.id === id);
    if (index !== -1){
      subCategories.value.splice(index, 1);
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
