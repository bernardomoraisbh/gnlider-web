<template>
  <q-page padding>
    <q-form @submit="saveProfile">
      <q-card flat bordered class="q-pa-md">
        <q-card-section>
          <div class="text-h6">Perfil</div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="q-gutter-y-md column">
            <q-input v-model="user.name" label="First Name" outlined />
            <q-input v-model="user.surName" label="Surname" outlined />
            <q-input v-model="user.birthday" label="Birthday" outlined mask="####-##-##" />

            <q-select
              v-model="user.sex"
              label="Sex"
              :options="sexOptions"
              outlined
              />

            <q-select
              v-model="user.profession"
              label="Profession"
              :options="professionOptions"
              outlined
              />

            <q-input v-model="user.email" label="Email" outlined />
            <q-select
              v-model="user.country"
              label="Country"
              :options="countryOptions"
              outlined
              />

            <q-input v-model="user.cpf" label="CPF" outlined mask="###.###.###-##" />
            <q-input v-model="user.cnpj" label="CNPJ" outlined mask="##.###.###/####-##" />
            <q-input v-model="user.stateInscriptionCode" label="State Inscription Code" outlined />
            <q-input v-model="user.cro" label="CRO" outlined />
            <q-select
              v-model="user.croState"
              label="CRO State"
              :options="ufOptions"
              outlined
              />
            <q-input v-model="user.phone" label="Phone" outlined mask="(##) ####-####" />
            <q-input v-model="user.cellphone" label="Cellphone" outlined mask="(##) #####-####" />

            <q-checkbox v-model="user.isWhatsapp" label="Is Whatsapp?" />
          </div>
          <q-separator class="q-mt-md" />
          <div class="text-h6 q-mt-md">Addresses</div>
          <q-list bordered>
            <q-item v-for="address in user.addresses" :key="address.id" clickable>
              <q-item-section>
                <q-item-label>{{ address.street }}, {{ address.number }}</q-item-label>
                <q-item-label caption>{{ address.neighborhood }}, {{ address.city }}</q-item-label>
                <q-item-label caption>{{ address.state }}, {{ address.postalCode }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn icon="edit" flat @click="editAddress(address.id)" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Save" type="submit" color="primary" />
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
  import { defaultUser, User } from "src/interfaces/user";
  import { countryOptions, professionOptions, sexOptions, ufOptions } from "src/mocks/options"; // Assuming you have these options in a separate file
  import { ref } from "vue";

  const user = ref<User>({ ...defaultUser });

  const saveProfile = () => {
  // Logic to save profile data
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const editAddress = (id: number) => {
  // Logic to edit address by ID
  };
</script>

<style scoped>
.q-pa-md {
  padding: 16px;
}
.q-mt-md {
  margin-top: 16px;
}
</style>
