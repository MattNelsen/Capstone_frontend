<template>
  <div id="home">
    <img
      src="https://plymouthmag.com/sites/default/files/styles/629w-scale/public/field/image/iStock-699144432.jpg?itok=BuzEZvbr"
      alt=""
      width="1450"
      height="650"
    />
    <h6>All Neighborhoods</h6>
    <div v-for="neighborhood in neighborhoods">
      <h7>{{ neighborhood.name }}</h7>
      <h8>All Bars</h8>
      <div v-for="bar in neighborhood.bars">
        <h9>{{ bar.name }}</h9>
        <h10>({{ bar.specials.length }})</h10>
        <div v-for="special in bar.specials">
          <button v-on:click="special in bar.specials">Special</button>
          <h6>{{ special.description }}</h6>
        </div>
      </div>
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
