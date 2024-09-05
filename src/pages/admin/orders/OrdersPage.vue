<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="q-mb-md">
          <q-input
            v-model="searchTerm"
            debounce="300"
            label="Buscar por ID do Pedido"
            filled
            @input="filterOrders"
            />
        </div>
      </q-card-section>
      <q-card-section>
        <q-table
          :rows="filteredOrders"
          :columns="columns"
          row-key="id"
          >
          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <q-btn flat label="Ver" @click="viewOrder(props.row)" />
              <q-btn flat label="Editar" @click="editOrder(props.row)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <!-- View Order Dialog -->
    <q-dialog v-model="showViewDialog" full-width transition-show="slide-up">
      <q-card>
        <q-bar>
          <div class="text-h6">Detalhes do Pedido #{{ currentOrder.id }}</div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Fechar</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <p>Status: {{ currentOrder.status }}</p>
          <p>Usuário: {{ currentOrder.user.name }}</p>
          <q-list bordered>
            <q-item-label>Produtos:</q-item-label>
            <q-item v-for="orderProduct in currentOrder.orderProducts" :key="orderProduct.id">
              <q-item-section v-for="orderItem in orderProduct.orderItems" :key="orderItem.id">
                {{ orderItem.amount }}x {{ orderItem.orderProduct.name }} -
                {{ orderItem.orderProduct.price.currency }}
                {{ orderItem.orderProduct.price.amount }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions>
          <q-space />
          <q-btn flat label="Fechar" @click="showViewDialog = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Edit Order Dialog -->
    <q-dialog v-model="showEditDialog" full-width transition-show="slide-up">
      <q-card>
        <q-bar>
          <div class="text-h6">Editar Pedido #{{ currentOrder.id }}</div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Fechar</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <q-select
            v-model="currentOrder.status"
            :options="statusOptions"
            label="Status do Pedido"
            filled
            />
          <q-list bordered>
            <q-item-label>Produtos:</q-item-label>
            <q-item v-for="orderProduct in currentOrder.orderProducts" :key="orderProduct.id">
              <q-item-section v-for="orderItem in orderProduct.orderItems" :key="orderItem.id">
                {{ orderItem.amount }}x {{ orderItem.orderProduct.name }} -
                {{ orderItem.orderProduct.price.currency }}
                {{ orderItem.orderProduct.price.amount }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions>
          <q-space />
          <q-btn flat label="Cancelar" @click="showEditDialog = false" />
          <q-btn label="Salvar" color="primary" @click="updateOrder" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">

  import { QBtn, QCard, QCardActions, QCardSection, QDialog, QInput, QItem, QItemLabel, QItemSection, QList, QSelect, QTable, QTd } from "quasar";
  import { Order, defaultOrder } from "src/interfaces/order";
  import ordersData from "src/mocks/orders.json";
  import { computed, reactive, ref } from "vue";

  const orders = ref<Order[]>(ordersData as Order[]);

  const searchTerm = ref("");
  const showViewDialog = ref(false);
  const showEditDialog = ref(false);
  const currentOrder = reactive<Order>(defaultOrder);

  // eslint-disable-next-line max-len
  const filteredOrders = computed(() => orders.value.filter((order) => order.id.toString().includes(searchTerm.value)));

  const columns: {
    name: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field: string | ((row: Order) => any); // Remove optional field
    align?: "right" | "left" | "center";
  }[] = [
    { name: "id", label: "ID", align: "left", field: "id" },
    { name: "status", label: "Status", align: "left", field: "status" },
    { name: "user", label: "Usuário", align: "left",  field: (row: Order) => `${row.user.name}` },
    { name: "action", label: "Ações", align: "center", field: "action" },
  ];

  const statusOptions = [
    "pending", "processing", "payment_pending", "payment_successful",
    "preparing_for_shipment", "shipped", "in_transit", "out_for_delivery",
    "delivered", "cancelled", "payment_failed", "payment_refunded",
  ];

  function filterOrders(){
  // Automatically updates filteredOrders due to computed property
  }

  function viewOrder(order: Order){
    Object.assign(currentOrder, order);
    showViewDialog.value = true;
  }

  function editOrder(order: Order){
    Object.assign(currentOrder, order);
    showEditDialog.value = true;
  }

  function updateOrder(){
    const index = orders.value.findIndex((o) => o.id === currentOrder.id);
    if (index !== -1){
      orders.value[index] = { ...currentOrder };
    }
    showEditDialog.value = false;
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
