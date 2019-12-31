<template>
  <div class="home">
    <img src="http://www.southerncrosskitchen.com/shared/images/weeklyspecial/662120/thursday/" alt="" />
    <h1>All Neighborhoods</h1>
    <div v-for="neighborhood in neighborhoods">
      <h2>{{ neighborhood.name }}</h2>
      <button v-on:click="showBar(bar)">Show Bars</button>
      <div v-if="currentBar === bar"></div>
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
