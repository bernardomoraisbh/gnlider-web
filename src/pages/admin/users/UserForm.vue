<template>
  <q-dialog v-model="showDialog" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ isEditMode ? 'Editar Usuário' : 'Criar Usuário' }}</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="submitForm">
          <q-input v-model="form.name" label="Name" required />
          <q-input v-model="form.surName" label="Surname" required />
          <q-input v-model="form.birthday" label="Birthday" type="date" required />
          <q-select v-model="form.sex" :options="sexOptions" label="Sex" required />
          <q-select v-model="form.profession" :options="professionOptions"
                    label="Profession" required />
          <q-input v-model="form.email" label="Email" type="email" required />
          <q-input v-model="form.cpf" label="CPF" required />
          <q-input v-model="form.cnpj" label="CNPJ" />
          <q-input v-model="form.stateInscriptionCode" label="State Inscription Code" />
          <q-input v-model="form.cro" label="CRO" />
          <q-select v-model="form.croState" :options="ufOptions" label="CRO State" />
          <q-input v-model="form.phone" label="Phone" />
          <q-checkbox v-model="form.isWhatsapp" label="Is WhatsApp?" />
          <q-input v-model="form.cellphone" label="Cellphone" />
          <!-- Add fields for Address management if needed -->

          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Cancel" flat @click="closeDialog" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
  import { ref, defineExpose, watch } from "vue";
  import { Female, Male, Other, defaultSex } from "src/interfaces/sex";
  import { MG, defaultUf } from "src/interfaces/uf";
  import { defaultProfession } from "src/interfaces/profession";
  import { User } from "src/interfaces/user"; // Adjust the import path

  const showDialog = ref(false);
  const isEditMode = ref(false);
  const form = ref<Partial<User>>({
    name: "",
    surName: "",
    birthday: "",
    sex: defaultSex,
    profession: defaultProfession,
    email: "",
    cpf: "",
    cnpj: "",
    stateInscriptionCode: "",
    cro: "",
    croState: defaultUf,
    phone: "",
    isWhatsapp: false,
    cellphone: "",
  });

  const sexOptions = [Female, Male, Other]; // Adjust according to your enum
  const professionOptions = [defaultProfession]; // Example options
  const ufOptions = [MG]; // Example UFs

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openDialog = (user?: User) => {
    isEditMode.value = !!user;
    if (user){
      form.value = { ...user };
    }
    else {
      form.value = {
        name: "",
        surName: "",
        birthday: "",
        sex: defaultSex,
        profession: defaultProfession,
        email: "",
        cpf: "",
        cnpj: "",
        stateInscriptionCode: "",
        cro: "",
        croState: defaultUf,
        phone: "",
        isWhatsapp: false,
        cellphone: "",
      };
    }
    showDialog.value = true;
  };

  const closeDialog = () => {
    showDialog.value = false;
  };

  const submitForm = () => {
    // Handle form submission
    closeDialog();
  };

  // Expose methods to parent component
  defineExpose({
    openDialog,
    closeDialog,
  });

  watch(showDialog, (newVal) => {
    if (!newVal){
      form.value = {};
    }
  });

</script>
