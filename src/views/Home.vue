<template>
  <div id="home">
    <img
      src="https://plymouthmag.com/sites/default/files/styles/629w-scale/public/field/image/iStock-699144432.jpg?itok=BuzEZvbr"
      alt=""
    />
    <h1>All Neighborhoods</h1>
    <div v-for="neighborhood in neighborhoods">
      <h2>{{ neighborhood.name }}</h2>
      <h3>All Bars</h3>
      <div v-for="bar in neighborhood.bars">
        <h4>{{ bar.name }}</h4>
        <h5>All Specials ({{ bar.specials.length }})</h5>
        <div v-for="special in bar.specials">
          <h6>{{ special.description }}</h6>
          <button v-on:click="currentSpecials = special">Special</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 100%;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Appy Hour!!!",
      neighborhoods: [],
      specials: [],
      currentSpecial: {}
    };
  },
  created: function() {
    axios.get("/api/neighborhoods").then(response => {
      this.neighborhoods = response.data;
    });
  },
  methods: {
    showSpecials: function(specials) {
      if (this.currentSpecial === specials) {
        this.currentSpecials = {};
      } else {
        this.currentSpecials = specials;
      }
    }
  }
};
</script>
