<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="q-mb-md">
          <q-input
            v-model="searchTerm"
            debounce="300"
            label="Buscar por nome da variante"
            filled
            @input="filterVariants"
            />
        </div>
        <q-btn label="Cadastrar nova variante" color="primary" @click="showCreateDialog = true" />
      </q-card-section>
      <q-card-section>
        <q-table
          :rows="filteredVariants"
          :columns="columns"
          row-key="id"
          >
          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <q-btn flat label="Editar" @click="editVariant(props.row)" />
              <q-btn flat label="Deletar" color="negative" @click="deleteVariant(props.row.id)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="showCreateDialog" full-width transition-show="slide-up">
      <q-card>
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <q-input v-model="newVariant.name" label="Nome" filled />
          <q-input v-model="newVariant.description" label="Descrição" filled />
          <q-input v-model="newVariant.stock" label="Estoque" type="number" filled />
          <q-input v-model="newVariant.referenceCode" label="Código de Referência" filled />
          <q-select
            v-model="newVariant.product"
            label="Produto"
            :options="products"
            option-label="name"
            option-value="id"
            filled
            />
          <q-input v-model="newVariant.productImage1Url" label="URL da Imagem 1" filled />
          <q-input v-model="newVariant.productImage2Url" label="URL da Imagem 2" filled />
          <q-input v-model="newVariant.productImage3Url" label="URL da Imagem 3" filled />
          <q-input v-model="newVariant.productImage4Url" label="URL da Imagem 4" filled />
          <q-input v-model="newVariant.productVideoUrl" label="URL do Vídeo" filled />
        </q-card-section>
        <q-card-actions>
          <q-space />
          <q-btn label="Cancelar" @click="showCreateDialog = false" />
          <q-btn label="Salvar" color="primary" @click="createVariant" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showEditDialog" full-width transition-show="slide-up">
      <q-card>
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <q-input v-model="currentVariant.name" label="Nome" filled />
          <q-input v-model="currentVariant.description" label="Descrição" filled />
          <q-input v-model="currentVariant.stock" label="Estoque" type="number" filled />
          <q-input v-model="currentVariant.referenceCode" label="Código de Referência" filled />
          <q-select
            v-model="currentVariant.product"
            label="Produto"
            :options="products"
            option-label="name"
            option-value="id"
            filled
            />
          <q-input v-model="currentVariant.productImage1Url" label="URL da Imagem 1" filled />
          <q-input v-model="currentVariant.productImage2Url" label="URL da Imagem 2" filled />
          <q-input v-model="currentVariant.productImage3Url" label="URL da Imagem 3" filled />
          <q-input v-model="currentVariant.productImage4Url" label="URL da Imagem 4" filled />
          <q-input v-model="currentVariant.productVideoUrl" label="URL do Vídeo" filled />
        </q-card-section>
        <q-card-actions>
          <q-space />
          <q-btn label="Cancelar" @click="showEditDialog = false" />
          <q-btn label="Salvar" color="primary" @click="updateVariant" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
  import {
    QBtn,
    QCard,
    QCardActions,
    QCardSection,
    QDialog,
    QInput,
    QSelect,
    QTable,
    QTd,
  } from "quasar";
  import { Product, defaultProduct } from "src/interfaces/product";
  import { ProductVariant } from "src/interfaces/productVariant";
  import productsData from "src/mocks/products.json"; // Assume this is your products data
  import variantsData from "src/mocks/productsVariants.json";
  import { computed, reactive, ref } from "vue";

  const variants = ref<ProductVariant[]>(variantsData as ProductVariant[]);
  const products = ref<Product[]>(productsData as Product[]); // Products list

  const searchTerm = ref("");
  const showCreateDialog = ref(false);
  const showEditDialog = ref(false);
  const newVariant = reactive<ProductVariant>({
    id: 0,
    name: "",
    description: "",
    stock: 0,
    referenceCode: "",
    price: {
      currency: "R$",
      amount: 19.99,
    },
    product: defaultProduct, // Initialize with an empty product
    productImage1Url: "",
    productImage2Url: "",
    productImage3Url: "",
    productImage4Url: "",
    productVideoUrl: "",
  });
  const currentVariant = reactive<ProductVariant>({
    id: 0,
    name: "",
    description: "",
    stock: 0,
    referenceCode: "",
    price: {
      currency: "R$",
      amount: 19.99,
    },
    product: defaultProduct, // Initialize with an empty product
    productImage1Url: "",
    productImage2Url: "",
    productImage3Url: "",
    productImage4Url: "",
    productVideoUrl: "",
  });

  // eslint-disable-next-line max-len
  const filteredVariants = computed(() => variants.value.filter((variant) => variant.name.toLowerCase().includes(searchTerm.value.toLowerCase())));

  const columns: {
    name: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field: string | ((row: ProductVariant) => any); // Remove optional field
    align?: "right" | "left" | "center";
  }[] = [
    { name: "name", label: "Nome", align: "left", field: "name" },
    { name: "description", label: "Descrição", align: "left", field: "description" },
    { name: "stock", label: "Estoque", align: "left", field: "stock" },
    { name: "referenceCode", label: "Código de Referência", align: "left", field: "referenceCode" },
    { name: "product", label: "Produto", align: "left", field: "product.name" },
    { name: "action", label: "Ações", align: "center", field: "action" },
  ];

  function filterVariants(){
  // Automatically updates filteredVariants due to computed property
  }

  function resetVariant(variant: ProductVariant){
    variant.name = "";
    variant.description = "";
    variant.stock = 0;
    variant.referenceCode = "";
    variant.product = defaultProduct;
    variant.productImage1Url = "";
    variant.productImage2Url = "";
    variant.productImage3Url = "";
    variant.productImage4Url = "";
    variant.productVideoUrl = "";
  }

  function createVariant(){
    variants.value.push({ ...newVariant });
    resetVariant(newVariant);
    showCreateDialog.value = false;
  }

  function editVariant(variant: ProductVariant){
    Object.assign(currentVariant, variant);
    showEditDialog.value = true;
  }

  function updateVariant(){
    const index = variants.value.findIndex((v) => v.id === currentVariant.id);
    if (index !== -1){
      variants.value[index] = { ...currentVariant };
    }
    showEditDialog.value = false;
  }

  function deleteVariant(id: number){
    const index = variants.value.findIndex((v) => v.id === id);
    if (index !== -1){
      variants.value.splice(index, 1);
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
