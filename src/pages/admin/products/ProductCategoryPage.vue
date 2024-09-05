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
            @input="filterCategories"
            />
        </div>
        <q-btn label="Cadastrar nova categoria" color="primary" @click="showCreateDialog = true" />
      </q-card-section>
      <q-card-section>
        <q-table
          :rows="filteredCategories"
          :columns="columns"
          row-key="id"
          >
          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <q-btn flat label="Editar" @click="editCategory(props.row)" />
              <q-btn flat label="Deletar" color="negative" @click="deleteCategory(props.row.id)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="showCreateDialog">
      <q-card>
        <q-card-section>
          <q-input v-model="newCategory.name" label="Nome" filled />
          <q-input v-model="newCategory.description" label="Descrição" filled />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Cancelar" @click="showCreateDialog = false" />
          <q-btn label="Salvar" color="primary" @click="createCategory" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showEditDialog">
      <q-card>
        <q-card-section>
          <q-input v-model="currentCategory.name" label="Nome" filled />
          <q-input v-model="currentCategory.description" label="Descrição" filled />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Cancelar" @click="showEditDialog = false" />
          <q-btn label="Salvar" color="primary" @click="updateCategory" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
  import { QBtn, QCard, QCardActions, QCardSection, QDialog, QInput, QTable, QTd } from "quasar";
  import { ProductCategory } from "src/interfaces/productCategory";
  import categoriesData from "src/mocks/categories.json";
  import { computed, reactive, ref } from "vue";

  const categories = ref<ProductCategory[]>(categoriesData as ProductCategory[]);

  const searchTerm = ref("");
  const showCreateDialog = ref(false);
  const showEditDialog = ref(false);
  const newCategory = reactive({ name: "", description: "" });
  const currentCategory = reactive({ id: 0, name: "", description: "" });

  // eslint-disable-next-line max-len
  const filteredCategories = computed(() => categories.value.filter((category) => category.name.toLowerCase().includes(searchTerm.value.toLowerCase())));

  const columns: {
    name: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field: string | ((row: ProductCategory) => any); // Remove optional field
    align?: "right" | "left" | "center";
  }[] = [
    { name: "name", label: "Nome", align: "left", field: "name" },
    { name: "description", label: "Descrição", align: "left", field: "description" },
    { name: "action", label: "Ações", align: "center", field: "action" },
  ];

  function filterCategories(){
  // Automatically updates filteredCategories due to computed property
  }

  function createCategory(){
    const id = categories.value.length ? Math.max(...categories.value.map((c) => c.id)) + 1 : 1;
    categories.value.push({ id, ...newCategory });
    newCategory.name = "";
    newCategory.description = "";
    showCreateDialog.value = false;
  }

  function editCategory(category: ProductCategory){
    Object.assign(currentCategory, category);
    showEditDialog.value = true;
  }

  function updateCategory(){
    const index = categories.value.findIndex((c) => c.id === currentCategory.id);
    if (index !== -1){
      categories.value[index] = { ...currentCategory };
    }
    showEditDialog.value = false;
  }

  function deleteCategory(id: number){
    const index = categories.value.findIndex((c) => c.id === id);
    if (index !== -1){
      categories.value.splice(index, 1);
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
