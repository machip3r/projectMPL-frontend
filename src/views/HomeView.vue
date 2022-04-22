<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <form @submit.prevent="login(user)">
      <input
        type="email"
        placeholder="Correo electrónico"
        v-model="user.email"
      />
      <input type="password" placeholder="Contraseña" v-model="user.password" />
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
