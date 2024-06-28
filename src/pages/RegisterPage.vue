<template>
  <q-page class="register-page">
    <q-card class="q-pa-md q-mx-auto register-card">
      <q-tabs v-model="activeTab" class="text-primary" align="center">
        <q-tab name="fisica" label="PESSOA FISICA" />
        <q-tab name="juridica" label="PESSOA JURIDICA" />
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="activeTab" animated>
        <q-tab-panel name="fisica">
          <q-form @submit.prevent="onSubmit">
            <div class="q-gutter-y-md column">
              <q-input outlined v-model="nomeInput.name" label="Nome" type="text" />
              <q-input outlined v-model="nomeInput.surName" label="Sobrenome" type="text" />
              <q-input outlined v-model="nomeInput.birthday" label="Nascimento" type="date" ou/>
              <q-input outlined
                       v-model="nomeInput.sex.description" label="Sexo (Opcional)" type="text" />
              <q-input outlined v-model="nomeInput.cpf" label="CPF" type="text" />
              <q-input outlined
                       v-model="nomeInput.profession.description" label="Profissão" type="text" />
              <q-checkbox label="Possui CRO? (Opcional)" v-model="isChecked" />
              <q-input outlined v-model="nomeInput.cro" v-if="isChecked"
                       label="Registro (CRO) (Opcional)" type="text" />
              <q-input outlined v-model="nomeInput.croState.abbreviation"
                       label="UF Registro (CRO) (Opcional)" type="text" />
              <q-input outlined v-model="nomeInput.phone" label="Celular (Opcional)" type="tel">
                <template v-slot:append>
                  <q-icon name="whatsapp" color="green" />
                </template>
              </q-input>
              <q-input outlined v-model="nomeInput.phone" label="Telefone (Opcional)" type="tel" />
              <q-btn type="submit" label="Cadastrar" color="primary" class="full-width" />
            </div>
          </q-form>
        </q-tab-panel>
        <q-tab-panel name="juridica">
          <q-form @submit.prevent="onSubmit">
            <div class="q-gutter-y-md column">
              <q-input outlined v-model="nomeInput.name" label="Nome" type="text" />
              <q-input outlined v-model="nomeInput.surName" label="Sobrenome" type="text" />
              <q-input outlined v-model="nomeInput.birthday" label="Nascimento" type="date" />
              <q-input outlined v-model="nomeInput.sex.description"
                       label="Sexo (Opcional)" type="text" />
              <q-input outlined v-model="nomeInput.cpf" label="CNPJ" type="text" />
              <q-input outlined v-model="nomeInput.profession.description"
                       label="Profissão" type="text" />
              <q-checkbox label="Possui CRO? (Opcional)" v-model="isChecked" />
              <q-input outlined v-model="nomeInput.cro" v-if="isChecked"
                       label="Registro (CRO) (Opcional)" type="text" />
              <q-input outlined v-model="nomeInput.croState.abbreviation"
                       label="UF Registro (CRO) (Opcional)" type="text" />
              <q-input outlined v-model="nomeInput.phone" label="Celular (Opcional)" type="tel">
                <template v-slot:append>
                  <q-icon name="whatsapp" color="green" />
                </template>
              </q-input>
              <q-input outlined v-model="nomeInput.phone" label="Telefone (Opcional)"
                       type="tel"/>
              <q-btn type="submit" label="Cadastrar" color="primary" class="full-width" />
            </div>
          </q-form>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
  import { User, defaultUser } from "src/interfaces/user";
  import { computed, ref } from "vue";

  defineOptions({
    name: "RegisterPage",
  });

  const isChecked = ref(false);

  const activeTab = ref("fisica");

  const nomeInput = ref<User>(defaultUser);

  const onSubmit = () => {
    console.log("Form Submitted:", nomeInput.value);
  };

  const cardStyle = computed(() => {
    const width = window.innerWidth;
    if (width < 600){
      return { maxWidth: "95%" };
    } if (width < 1200){
      return { maxWidth: "80%" };
    }
    return { maxWidth: "60%" };
  });
</script>

<style scoped>
.register-page {
  display: flex;
  align-items: flex-start;
  height: 100vh;
  background-color: #f5f5f5;
  margin: 0;  /* Ensure no extra margin on the page */
  padding: 0;  /* Ensure no extra padding on the page */
  padding-top: 1vh;
}

.full-width {
  width: 100%;
}

.register-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px; /* Default for large screens */
  min-width: 300px; /* Minimum width for small screens */
}

@media (min-width: 600px) {
  .register-page {
    height: 80vh;
  }
  .register-card {
    max-width: 600px;
  }
}

@media (min-width: 1200px) {
  .register-page {
    height: 40vh;
  }

  .register-card {
    max-width: 800px;
  }
}
</style>
