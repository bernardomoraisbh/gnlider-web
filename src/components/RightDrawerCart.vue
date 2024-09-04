<template>
  <q-drawer v-model="cartStore.rightDrawerCartOpen" side="right" elevated>
    <q-scroll-area class="fit">
      <q-list padding>
        <q-item-label header>Meu Carrinho</q-item-label>
        <q-separator spaced />

        <q-item v-for="(item, index) in cartStore.userCart.cartProducts"
                :key="item.product.id" class="cart-item">
          <q-item-section avatar>
            <q-img :src="item.product.productImage1Url" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ item.product.name }}</q-item-label>
            <q-item-label caption>
              {{ item.product.price.currency }} {{ item.product.price.amount }}
            </q-item-label>
            <q-item-label caption>Quantidade: {{ item.amount }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn dense icon="remove" @click="decreaseQuantity(index)" />
            <q-btn dense icon="add" @click="increaseQuantity(index)" />
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item>
          <q-item-section>
            <q-item-label>Total:</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>{{ totalAmount.currency }} {{ totalAmount.amount }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <div class="q-pa-md">
          <q-space />
          <q-btn unelevated color="primary" label="Finalizar" @click="proceedToCheckout" />
        </div>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { Money } from "../interfaces/money";
  import { useCartStore } from "../stores/cart";

  const cartStore = useCartStore();

  const totalAmount = computed<Money>(() => {
    const totalSum = cartStore.userCart.cartProducts.reduce((total, item) => {
      total.amount += item.amount * item.product.price.amount;
      total.currency = item.product.price.currency;
      return total;
    }, { amount: 0, currency: "R$" } as Money);

    // Format the amount to two decimal places
    totalSum.amount = parseFloat(totalSum.amount.toFixed(2));

    return totalSum;
  });

  const decreaseQuantity = (index: number) => {
    cartStore.decreaseQuantity(index);
  };

  const increaseQuantity = (index: number) => {
    cartStore.increaseQuantity(index);
  };

  const proceedToCheckout = () => {
    cartStore.proceedToCheckout();
  };
</script>

<style scoped>
.cart-item {
  margin-bottom: 12px;
}

.q-drawer {
  width: 300px;
}

.q-list {
  padding: 16px;
}

.q-separator {
  margin: 12px 0;
}

.q-item-section img {
  max-width: 50px;
  max-height: 50px;
}

.q-item-label {
  font-weight: bold;
}

.q-btn {
  margin-left: 4px;
  margin-right: 4px;
}

.q-btn.unelevated {
  width: 100%;
  text-align: center;
}
</style>
