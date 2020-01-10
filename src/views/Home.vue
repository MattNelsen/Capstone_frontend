<template>
  <div class="home">
    <h1>All Neighborhoods</h1>
    <div v-for="neighborhood in neighborhoods">
      <h2>{{ neighborhood.name }}</h2>
      <h3>All Bars</h3>
      <div v-for="bar in neighborhood.bars">
        <h4>{{ bar.name }}</h4>
        <button v-on:click="showBar(bar)">More info</button>
      </div>
    </div>
  </div>
</template>

<style>
img {
  width: 150px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Appy Hour!!!",
      neighborhoods: [],
      currentBar: {}
    };
  },
  created: function() {
    axios.get("/api/neighborhoods").then(response => {
      this.neighborhoods = response.data;
    });
  },
  methods: {
    showBar: function(bar) {
      if (this.currentBar === bar) {
        this.currentBar = {};
      } else {
        this.currentBar = bar;
      }
    }
  }
};
</script>
