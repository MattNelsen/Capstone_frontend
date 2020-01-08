<template>
  <div class="container"></div>
</template>

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
