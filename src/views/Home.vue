<template>
  <div class="home">
    <h1>All Neighborhoods</h1>
    <div v-for="neighborhood in neighborhoods">
      <h2>{{ neighborhood.name }}</h2>
    </div>
    <h1>All Bars</h1>
    <div v-for="bar in bars">
      <h2>{{ bar.name }}</h2>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Appy Hour!!!",
      neighborhoods: [],
      bars: []
    };
  },
  created: function() {
    axios.get("/api/neighborhoods").then(response => {
      this.neighborhoods = response.data;
      axios.get("/api/bars").then(response => {
        this.bar = response.data;
      });
    });
  },
  methods: {}
};
</script>
