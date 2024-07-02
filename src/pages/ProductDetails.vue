<template>
  <q-page class="q-pa-md q-gutter-sm">
    <q-card flat class="q-pb-md q-pa-lg q-elevation-2" v-if="product">
      <q-card-section>
        <q-page class="q-pa-md">
          <div :class="rowCarouselProductClass">
            <div :class="carouselClass">
              <q-carousel
                v-model="slide"
                v-model:fullscreen="fullscreen"
                animated
                swipeable
                arrows
                control-type="regular"
                control-text-color="grey-8"
                infinite
                autoplay
                transition-prev="slide-right"
                transition-next="slide-left"
                thumbnails
                class="rounded-borders"
                >
                <q-carousel-slide
                  v-for="(img, index) in productImages"
                  :key="index"
                  :name="index.toString()"
                  :img-src="img"
                  />
                <template v-slot:control>
                  <q-carousel-control
                    position="bottom-right"
                    :offset="[18, 18]"
                    >
                    <q-btn
                      push round dense color="white" text-color="primary"
                      :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                      @click="fullscreen = !fullscreen"
                      />
                  </q-carousel-control>
                </template>
              </q-carousel>
            </div>
            <div :class="productDescriptionClass">
              <q-card-section>
                <div class="text-h6">{{ product.name }}</div>
                <div class="text-subtitle2">{{ product.resumedDescription }}</div>
              </q-card-section>

              <q-card-section>
                <div class="text-h5 text-primary">
                  {{ product.price.currency }}{{ product.price.amount }}</div>
                <div class="text-caption">Cód. de Referência: {{ product.referenceCode }}</div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <div class="row fit justify-start items-start">
                  <q-btn class="col-6 full-height"
                         color="primary" label="Adicionar ao Carrinho" @click="addToCart" />
                  <q-btn class="col-6 full-height" flat label="Adicionar à Lista de Desejos" />
                </div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <q-expansion-item default-opened icon="info" label="Detalhes" expand-separator>
                  <div v-html="product.bigDescription" />
                </q-expansion-item>
                <q-separator />
                <q-expansion-item default-opened icon="build" label="Aplicação" expand-separator>
                  <div v-html="product.application" />
                </q-expansion-item>
                <q-separator />
                <q-expansion-item default-opened icon="info_outline"
                                  label="Informações Adicionais" expand-separator>
                  <div v-html="product.aditionalInformation" />
                </q-expansion-item>
              </q-card-section>
            </div>
          </div>
        </q-page>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
  import { computed, ref } from "vue";
  import { useScreenInfo } from "../composables/deviceComposable";

  const { isMobile } = useScreenInfo();

  import { Product } from "src/interfaces/product";
  import productsData from "../mocks/products.json"; // Import the JSON file containing the products

  import { useRoute } from "vue-router";

  const route = useRoute();

  const products = ref<Product[]>(productsData as Product[]);

  const product = computed<Product | null>(() => {
    const queryId = parseInt(route.query.id as string, 10);
    return products.value.find((productFilter) => productFilter.id === queryId) || null;
  });

  const productImages = computed(() => [product.value?.productImage1Url,
                                        product.value?.productImage2Url,
                                        product.value?.productImage3Url,
                                        product.value?.productImage4Url,
  ]);

  const slide = ref(1);

  const fullscreen = ref(false);

  const addToCart = () => {
    // eslint-disable-next-line no-console
    console.log("Add to cart clicked");
  };

  const rowCarouselProductClass = computed(() => {
    if (isMobile.value){
      return "fit justify-start items-start q-gutter-xs q-col-gutter no-wrap";
    }
    return "row fit justify-start items-start q-gutter-xs q-col-gutter no-wrap";
  });

  const carouselClass = computed(() => {
    if (isMobile.value){
      return "col-12 full-height";
    }
    return "col-6 full-height";
  });

  const productDescriptionClass = computed(() => {
    if (isMobile.value){
      return "col-12 full-height";
    }
    return "col-6 full-height";
  });
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.q-card {
  max-width: 100vh;
  width: 100%;
}

.q-carousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
</style>
