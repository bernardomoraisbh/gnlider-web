<template>
  <q-card>
    <q-card-section>
      <div class="q-mb-md">
        <q-input v-model="searchTerm" label="Buscar por nome" filled debounce="300" />
      </div>
      <q-btn label="Criar usuário" color="primary" @click="openCreateDialog" />
    </q-card-section>

    <q-card-section>
      <q-table
        :rows="filteredUsers"
        :columns="columns"
        row-key="id"
        >
        <template v-slot:body-cell-actions="props">
          <q-btn flat icon="edit" @click="openEditDialog(props.row)" />
        </template>
      </q-table>
    </q-card-section>

    <user-form ref="userFormRef" />
  </q-card>
</template>

<script setup lang="ts">
  import { ref, computed } from "vue";
  import { User } from "src/interfaces/user"; // Adjust the import path
  import UserForm from "./UserForm.vue"; // Adjust the import path

  const users = ref<User[]>([]); // Replace with your data source
  const searchTerm = ref("");

  const columns = [
    { name: "name", label: "Nome", field: "name" },
    { name: "email", label: "Email", field: "email" },
    { name: "cpf", label: "CPF", field: "cpf" },
    { name: "actions", label: "Ações", align: "right" },
  ];

  const filteredUsers = computed(() => {
    if (!searchTerm.value) return users.value;
    // eslint-disable-next-line max-len
    return users.value.filter((user) => user.name.toLowerCase().includes(searchTerm.value.toLowerCase())
      || user.email.toLowerCase().includes(searchTerm.value.toLowerCase())
      || user.cpf.toLowerCase().includes(searchTerm.value.toLowerCase()));
  });

  const userFormRef = ref<InstanceType<typeof UserForm> | null>(null);

  const openCreateDialog = () => {
    if (userFormRef.value){
      userFormRef.value.openDialog();
    }
  };

  const openEditDialog = (user: User) => {
    if (userFormRef.value){
      userFormRef.value.openDialog(user);
    }
  };

</script>
