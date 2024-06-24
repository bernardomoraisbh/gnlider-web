<template>
  <q-page class="row items-center justify-evenly">
    <q-layout>
      <q-page-container>
        <div class="q-pa-md">
          <div class="flex justify-between">
            <div> Passo 2 de 3 </div>
            <div>Selecione o tipo de conta</div>
          </div>

          <div class="text-h5 mt-4"> Laboratório </div>

          <div class="flex flex-wrap justify-evenly mt-4">
            <q-btn flat label="Pessoa Física" color="primary"/>
            <q-btn flat label="Pessoa Jurídica" color="primary"/>
          </div>

          <div class="q-pa-md mt-4">
            <q-input v-model="nomeInput.name" label="Nome" type="text" />
            <q-input v-model="nomeInput.surName" label="Sobrenome" type="text" />
            <q-input v-model="nomeInput.birthday" label="Nascimento" type="date" />
            <q-input v-model="nomeInput.sex.description" label="Sexo (Opcional)" type="text" />
            <q-input v-model="nomeInput.cpf" label="CPF" type="text" />
            <q-input v-model="nomeInput.profession.description" label="Profissão" type="text" />

            <div class="flex items-center mt-4">
              <q-checkbox label="Possui CRO? (Opcional)" v-model="isChecked" />
              <q-input v-model="nomeInput.cro" v-if="isChecked"
                       label="Registro (CRO) (Opcional)" type="text" />
            </div>

            <q-input v-model="nomeInput.croState.abbreviation"
                     label="UF Registro (CRO) (Opcional)" type="text" />

            <p class="text-caption mt-2">
              Ao fornecer o seu CRO, disponibilizaremos produtos exclusivos para o
              exercício da sua profissão como: anestésicos, materiais inflamatórios e outros.
            </p>

            <div class="flex items-center mt-4">
              <q-input v-model="nomeInput.phone" label="Celular (Opcional)" type="tel" />
              <q-icon class="ml-2" name="whatsapp" color="green" />
            </div>
            <q-input v-model="nomeInput.phone" label="Telefone (Opcional)" type="tel" />
          </div>

          <div class="flex justify-between mt-4">
            <q-btn flat label="Voltar para perfil" color="primary" />
            <q-btn label="Continuar" color="primary" />
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script setup lang="ts">
  import { User, defaultUser } from "src/interfaces/user";
  import { ref } from "vue";

  defineOptions({
    name: "RegisterPage",
  });

  const isChecked = ref(false);

  const nomeInput = ref<User>(defaultUser);
</script>

<style scoped>
/* Adjust styles as needed */
.q-pa-md {
  padding: 20px;
}
</style>
