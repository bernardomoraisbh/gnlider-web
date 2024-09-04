<template>
  <div class="q-pa-md">
    <q-btn flat label="Entrar" icon="person">
      <q-menu>
        <div class="row no-wrap q-pa-md justify-center items-center">
          <q-card flat square class="q-pa-lg shadow-1">
            <q-card-section class="q-px-md">
              Login
            </q-card-section>
            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input square filled clearable v-model="email" type="email" label="Email" />
                <q-input square filled clearable v-model="password" type="password" label="Senha" />
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn unelevated color="light-green-7" size="lg" class="full-width" label="Login" />
            </q-card-actions>
            <q-card-section class="text-center q-px-md">
              <a href="#" @click="navigateTo('/account/create')" class="text-grey-6">
                Não possui conta? Clique aqui para cadastrar-se!
              </a>
            </q-card-section>
          </q-card>
        </div>
        <!-- <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6  q-pa-md">Login</div>
            <q-form>
              <q-input
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="Email"
                class="q-pa-md"
                />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="Senha"
                class="q-pa-md"
                />
              <q-btn
                unelevated
                color="light-green-7"
                size="lg"
                class="full-width"
                label="Login"
                />
              <a href="/" class="q-pa-md">
                Não possui conta? Clique aqui para cadastrar-se!
              </a>
            </q-form>
          </div>
        </div> -->
      </q-menu>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  defineOptions({
    name: "LoginMenu",
  });

  const email = ref("");
  const password = ref("");

  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigateTo = (path: any) => {
    router.push(path);
  };

</script>
