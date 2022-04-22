<template>
  <div class="about">
    <h1>Ruta Protegida</h1>
    <button @click="logOut()">Cerrar sesión</button>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  created() {
    this.route();
  },
  computed: {
    ...mapState(["token"]),
  },
  methods: {
    ...mapActions(["logOut"]),
    async route() {
      try {
        const result = await fetch(
          "https://projectmpl-backend.herokuapp.com/api/dashboard",
          {
            headers: {
              "Content-Type": "application/json",
              "auth-token": this.token,
            },
          }
        );

        const resultBD = await result.json();
        console.log(resultBD);
      } catch (error) {
        console.log("Error on route(): " + error);
      }
    },
  },
};
</script>
