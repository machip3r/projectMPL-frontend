<template>
  <div class="container">
    <div class="about1" v-if="error == null">
      <h1>Ruta Protegida</h1>
      <button @click="logOut()">Cerrar sesión</button>
    </div>
    <div class="about2" v-else>
      <h1>Ruta No Protegida</h1>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  data() {
    return {
      error: "",
    };
  },
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
        this.error = resultBD.error;
        console.log(resultBD);
      } catch (error) {
        console.log("Error on route(): " + error);
      }
    },
  },
};
</script>
