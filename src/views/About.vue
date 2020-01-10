<template>
  <div class="about">
    <div>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQEZcDWedYU9rg/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=9kA8eYTzcB0PB7TmumWYS8xLB3UgApjzFcTTDK49j3w"
        alt=""
      />
    </div>
    <h1>My name is Matt Nelsen</h1>
  </div>
</template>

<style>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 250px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      About: []
    };
  },
  created: function() {
    axios.get("/api/about").then(response => {
      this.about = response.data;
    });
  },
  methods: {}
};
</script>
