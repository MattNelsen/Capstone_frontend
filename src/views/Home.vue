<template>
  <div id="home">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Welcome to Appy Hour!</h1>
        <p class="lead">
          The convenient spot to find that well deserved Happy Hour special you've been waiting all day for!
        </p>
      </div>
    </div>

    <img
      src="https://plymouthmag.com/sites/default/files/styles/629w-scale/public/field/image/iStock-699144432.jpg?itok=BuzEZvbr"
      alt=""
      width="100%"
      height="550"
    />
  </div>
</template>

<style>
.container {
  color: red;
  font-family: Ariel;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Appy Hour!!!"
    };
  },
  created: function() {
    axios.get("/api/neighborhoods").then(response => {
      this.neighborhoods = response.data;
    });
  },
  methods: {}
};
</script>
