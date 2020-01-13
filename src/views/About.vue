<template>
  <div class="about">
    <div>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQEZcDWedYU9rg/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=9kA8eYTzcB0PB7TmumWYS8xLB3UgApjzFcTTDK49j3w"
        alt=""
      />
    </div>
    <h11>
      I was influenced to create Appy Hour from my future brother-in-law before I was enrolled at Actualize. Appy Hour
      was an idea that I believe has the ability to keep growing as more neighborhoods and bars continue to be added to
      the app.
    </h11>
  </div>
</template>

<style>
#img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
#h11 {
  color: SteelBlue;
  font-family: ariel;
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
