<template>
  <q-card class="product-card" @click="productRedirect">
    <q-img :src="product.productImage1Url" alt="Product Image" class="product-image"/>
    <div class="product-name">
      <b>{{ product.name.substring(0, 66) }}{{ product.name.length > 66 ? '...' : '' }}</b>
    </div>

    <div class="product-description text-caption text-grey">
      {{ product.resumedDescription.substring(0, 55) }}
      {{ product.resumedDescription.length > 66 ? '...' : '' }}
    </div>

    <div class="product-price">
      <span class="price">
        {{ product.price.currency }} {{ product.price.amount.toFixed(2) }}
      </span>
    </div>

    <q-separator class="separator"/>

    <q-card-actions class="card-actions">
      <div class="quantity-box">
        <q-btn flat round icon="remove" @click.stop="cartRemove" :disabled="count === 1" />
        <span>{{ count }}</span>
        <q-btn flat round icon="add" @click.stop="cartAdd" :disabled="count === product.stock"/>
      </div>
      <q-btn flat @click.stop="cartStoreAdd">Adicionar</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
  import { computed, defineProps, ref, withDefaults } from "vue";
  import { useRouter } from "vue-router";
  import { useStringUtils } from "../composables/stringUtils";
  import { Product } from "../interfaces/product";
  import { useCartStore } from "../stores/cart";

  const cartStore = useCartStore();

  defineOptions({
    name: "ProductCard",
  });

  const { normalizeString } = useStringUtils();

  const count = ref(1);

  const router = useRouter();

  interface Props {
    product: Product;
  }

  const props = withDefaults(defineProps<Props>(), {
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

  const querySafeProductName = computed(() => normalizeString(props.product.name));

  const productRedirect = () => {
    router.push({ path: `/product/${querySafeProductName.value}`, query: { id: props.product?.id } });
  };

  const cartAdd = () => {
    count.value += 1;
  };

  const cartStoreAdd = () => {
    cartStore.addProduct(props.product);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cartStoreRemove = () => {
    cartStore.removeProduct(props.product?.id);
  };

  const cartRemove = () => {
    count.value -= 1;
  };
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 100%;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-name,
.product-description {
  text-align: left;
  min-height: 3rem;
}

.product-description {
  min-height: 2rem;
  margin-top: 0.5rem;
}

.product-price {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: left;
}

.price {
  font-size: 1.2rem;
  font-weight: 700;
}

.separator {
  margin-top: auto; /* Ensures separator is at the bottom of the content */
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity-box {
  background: #f9f9f9;
  padding: 0.1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
}

.quantity-box .q-btn + .q-btn {
  margin-left: 5px;
}

.quantity-box span {
  width: 2rem;
  text-align: center;
}
</style>
