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
        <q-btn label="Cadastrar novo produto" color="primary" @click="showCreateDialog = true" />
      </q-card-section>
      <q-card-section>
        <q-table
          :rows="filteredProducts"
          :columns="columns"
          row-key="id"
          >
          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <q-btn flat label="Editar" @click="editProduct(props.row)" />
              <q-btn flat label="Deletar" color="negative" @click="deleteProduct(props.row.id)" />
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
            <q-tooltip class="bg-white text-primary">Fechar</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <q-input v-model="newProduct.name" label="Nome" filled />
          <q-input v-model="newProduct.resumedDescription" label="Descrição Resumida" filled />
          <q-input v-model="newProduct.bigDescription" label="Descrição Completa" filled />
          <q-input v-model="newProduct.application" label="Aplicação" filled />
          <q-input v-model="newProduct.aditionalInformation"
                   label="Informações Adicionais" filled />
          <q-toggle v-model="newProduct.restrictSelling" label="Restrição de Venda" />
          <q-input v-model.number="newProduct.price.amount" label="Preço" type="number" filled />
          <q-input v-model="newProduct.price.currency" label="Moeda" filled />
          <q-input v-model.number="newProduct.stock" label="Estoque" type="number" filled />
          <q-input v-model="newProduct.referenceCode" label="Código de Referência" filled />
          <q-input v-model="newProduct.productImage1Url" label="Imagem 1 URL" filled />
          <q-input v-model="newProduct.productImage2Url" label="Imagem 2 URL" filled />
          <q-input v-model="newProduct.productImage3Url" label="Imagem 3 URL" filled />
          <q-input v-model="newProduct.productImage4Url" label="Imagem 4 URL" filled />
          <q-input v-model="newProduct.productVideoUrl" label="URL do Vídeo" filled />
        </q-card-section>
        <q-card-actions>
          <q-space />
          <q-btn label="Cancelar" @click="showCreateDialog = false" />
          <q-btn label="Salvar" color="primary" @click="createProduct" />
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
          <q-input v-model="currentProduct.name" label="Nome" filled />
          <q-input v-model="currentProduct.resumedDescription" label="Descrição Resumida" filled />
          <q-input v-model="currentProduct.bigDescription" label="Descrição Completa" filled />
          <q-input v-model="currentProduct.application" label="Aplicação" filled />
          <q-input v-model="currentProduct.aditionalInformation"
                   label="Informações Adicionais" filled />
          <q-toggle v-model="currentProduct.restrictSelling" label="Restrição de Venda" />
          <q-input v-model.number="currentProduct.price.amount"
                   label="Preço" type="number" filled />
          <q-input v-model="currentProduct.price.currency" label="Moeda" filled />
          <q-input v-model.number="currentProduct.stock" label="Estoque" type="number" filled />
          <q-input v-model="currentProduct.referenceCode" label="Código de Referência" filled />
          <q-input v-model="currentProduct.productImage1Url" label="Imagem 1 URL" filled />
          <q-input v-model="currentProduct.productImage2Url" label="Imagem 2 URL" filled />
          <q-input v-model="currentProduct.productImage3Url" label="Imagem 3 URL" filled />
          <q-input v-model="currentProduct.productImage4Url" label="Imagem 4 URL" filled />
          <q-input v-model="currentProduct.productVideoUrl" label="URL do Vídeo" filled />
        </q-card-section>
        <q-card-actions>
          <q-space />
          <q-btn label="Cancelar" @click="showEditDialog = false" />
          <q-btn label="Salvar" color="primary" @click="updateProduct" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
  import { QBtn, QCard, QCardActions, QCardSection, QDialog, QInput, QTable, QTd, QToggle } from "quasar";
  import { Product } from "src/interfaces/product";
  import productsData from "src/mocks/products.json";
  import { computed, reactive, ref } from "vue";

  const products = ref<Product[]>(productsData as Product[]);

  const searchTerm = ref("");
  const showCreateDialog = ref(false);
  const showEditDialog = ref(false);
  const newProduct = reactive<Product>({
    id: 0,
    name: "",
    resumedDescription: "",
    bigDescription: "",
    application: "",
    aditionalInformation: "",
    restrictSelling: false,
    price: { amount: 0, currency: "" },
    stock: 0,
    referenceCode: "",
    productImage1Url: "",
    productImage2Url: "",
    productImage3Url: "",
    productImage4Url: "",
    productVideoUrl: "",
  });
  const currentProduct = reactive<Product>({
    id: 0,
    name: "",
    resumedDescription: "",
    bigDescription: "",
    application: "",
    aditionalInformation: "",
    restrictSelling: false,
    price: { amount: 0, currency: "" },
    stock: 0,
    referenceCode: "",
    productImage1Url: "",
    productImage2Url: "",
    productImage3Url: "",
    productImage4Url: "",
    productVideoUrl: "",
  });

  // eslint-disable-next-line max-len
  const filteredProducts = computed(() => products.value.filter((product) => product.name.toLowerCase().includes(searchTerm.value.toLowerCase())));

  const columns = [
    { name: "name", label: "Nome", align: "left", field: "name" },
    { name: "resumedDescription", label: "Descrição Resumida", align: "left", field: "resumedDescription" },
    { name: "price", label: "Preço", align: "left", field: (row: Product) => `${row.price.amount} ${row.price.currency}` },
    { name: "stock", label: "Estoque", align: "left", field: "stock" },
    { name: "action", label: "Ações", align: "center", field: "action" },
  ];

  function createProduct(){
    products.value.push({ ...newProduct });
    Object.assign(newProduct, {
      name: "",
      resumedDescription: "",
      bigDescription: "",
      application: "",
      aditionalInformation: "",
      restrictSelling: false,
      price: { amount: 0, currency: "" },
      stock: 0,
      referenceCode: "",
      productImage1Url: "",
      productImage2Url: "",
      productImage3Url: "",
      productImage4Url: "",
      productVideoUrl: "",
    });
    showCreateDialog.value = false;
  }

  function editProduct(product: Product){
    Object.assign(currentProduct, product);
    showEditDialog.value = true;
  }

  function updateProduct(){
    const index = products.value.findIndex((p) => p.id === currentProduct.id);
    if (index !== -1){
      products.value[index] = { ...currentProduct };
    }
    showEditDialog.value = false;
  }

  function deleteProduct(id: number){
    const index = products.value.findIndex((p) => p.id === id);
    if (index !== -1){
      products.value.splice(index, 1);
    }
  }
</script>

<style scoped>
.q-page {
  max-width: auto;
  margin: auto;
}

.q-dialog {
  max-width: none !important;
  width: 800px;
}

.q-table {
  margin-top: 1rem;
}
</style>
