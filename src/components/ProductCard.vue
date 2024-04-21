<template>
  <q-card class="product-card">
    <q-img :src="product.productImage1Url" alt="Product Image"/>
    <div><b>{{ product.name.substring(0, 66) }}{{ product.name.length > 66 ? '...' : '' }}</b></div>
    <div/>
    <div class="text-caption text-grey">
      {{ product.resumedDescription.substring(0, 55) }}
      {{ product.resumedDescription.length > 66 ? '...' : '' }}
    </div>
    <div class="product-price">
      <span style="font-size: 1.2rem; font-weight: 700;">
        {{ product.price.currency }} {{ product.price.amount.toFixed(2) }}
      </span>
    </div>

    <q-separator />

    <q-card-actions style="justify-content: space-between;">
      <div class="quantity-box">
        <q-btn flat round icon="remove" @click="decrementCount" :disabled="count === 1" />
        <span>{{ count }}</span>
        <q-btn flat round icon="add" @click="incrementCount" :disabled="count === product.stock"/>
      </div>
      <q-btn flat>Adicionar</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
  import { defineProps, ref, withDefaults } from "vue";
  import { Product } from "../interfaces/product";

  defineOptions({
    name: "ProductCard",
  });

  const count = ref(1);

  const incrementCount = () => {
    count.value++;
  };
  const decrementCount = () => {
    if (count.value > 1){
      count.value--;
    }
  };

  interface Props {
    product: Product;
  }

  withDefaults(defineProps<Props>(), {
    product: (): Product => ({
      id: 1,
      name: "1/5 Condicionador Ácido Fluorídrico Porcelana 10% - Maquira",
      resumedDescription: "Embalagem com 1 seringa de 2,5ml.",
      bigDescription: `
* Boa viscosidade.
* Fácil remoção.
* Não apresenta risco de escoamento.
* É contraindicado o uso em pacientes com sensibilidades aos componentes do produto.
* Registro ANVISA: 80322400046.

Informações Técnicas
* Composição: Ácido fluorídrico na concentração de 10%, espessante, corante e água purificada.
* Armazenar em temperatura entre 5°C e 25°C.`,
      application: `

O Condicionador Ácido Fluorídrico Porcelana 10% da Maquira é indicado para realizar o condicionamento superficial de porcelanas dentais para adesão em processos de restauração em vidro ceramizado. Através da sua ótima viscosidade, permite maior e melhor retenção dos materiais resinosos nas restaurações com porcelanas feldspáticas, vidros ceramizados e fixação de bráquetes ortodônticos.
Vantagens de utilizar o Condicionador Ácido Fluorídrico Porcelana 10% da Maquira

Além de apresentar ótima densidade para maior segurança na aplicação, o produto conta com corante em sua composição, que permite melhor visualização do produto na região a ser condicionada. Também possibilita fácil remoção do produto através da sua afinidade com água.

Instruções de Uso

* Para porcelana feldspática: utilizar por 1-2 minutos.
* Para vidros ceramizados usinados: utilizar por 1 minuto.
* Para vidros ceramizados prensados/injetados: utilizar por 20-30 segundos.
* Utilizar água em abundância na remoção do produto, pois o ácido fluorídrico em contato com o esmalte pode causar descalcificação óssea.
* Para procedimentos ortodônticos: remover o produto com algodão ou sugador cirúrgico.
* Atenção: seguir sempre as orientações de uso do fabricante.`,
      aditionalInformation: "Acesse mais informações no Manual do Condicionador Ácido Fluorídrico 10% da Maquira.",
      restrictSelling: false,
      price: {
        amount: 19.90,
        currency: "R$",
      },
      stock: 5,
      referenceCode: "384994",
      productImage1Url: "https://cdn.dentalcremer.com.br/produtos/550/condicionador-acido-fluoridrico-porcelana-10-maquira-384994.jpg",
      productImage2Url: "https://cdn.dentalcremer.com.br/produtos/550/condicionador-acido-fluoridrico-porcelana-10-maquira-384994.jpg",
      productImage3Url: "https://cdn.dentalcremer.com.br/produtos/550/seringa-condicionador-acido-fluoridrico-porcelana-10-maquira-384994.jpg",
      productImage4Url: "https://cdn.dentalcremer.com.br/produtos/550/embalagem-condicionador-acido-fluoridrico-porcelana-10-maquira-384994.jpg",
      productVideoUrl: "https://cdn.dentalcremer.com.br/produtos/550/embalagem-condicionador-acido-fluoridrico-porcelana-10-maquira-384994.jpg",
    }),
  });
</script>

<style scoped>
.product-card {
  /* Add your styling for product cards here */
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* Optional: Add hover effect */
}

.product-price {
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.quantity-box {
  box-sizing: border-box;
  background: #f9f9f9;
  padding: 0.1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex; /* Optional: Align buttons horizontally */
  align-items: center; /* Optional: Center buttons vertically */
}

.quantity-box .q-btn + .q-btn { /* Add margin between buttons */
  margin-left: 5px;
}
</style>
