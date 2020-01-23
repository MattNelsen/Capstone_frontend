<template>
  <div id="home">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <img src="https://media0.giphy.com/media/uANVkGeJcYxEzwDXhU/source.gif" width="70" alt="" />
        <h2 class="display-4">Welcome to Appy Hour!</h2>
        <p class="lead">
          Choose a neighborhood || Find your bar || Enjoy the night
        </p>
      </div>
    </div>

    <div class="neighborhood-1">
      <!-- Place the anchor tag here to cover both your caption and image -->
      <a href="/neighborhoods/1" class="">
        <div class="caption">
          <h4 class="">Logan Square</h4>
        </div>
        <a>
          <img
            src="https://cdn.vox-cdn.com/thumbor/UAh8VjrwQNzQQ880uANp-7v4qLE=/0x0:2048x1365/1200x800/filters:focal(861x520:1187x846)/cdn.vox-cdn.com/uploads/chorus_image/image/57954839/27211487959_893cd4d20b_k.0.jpg"
            alt="..."
            width="470"
            height="280"
            class=""
          />
        </a>
      </a>
      <!-- Anchor tag ends covering both image and caption -->
    </div>

    <div class="neighborhood-2">
      <!-- Place the anchor tag here to cover both your caption and image -->
      <a href="/neighborhoods/2" class="">
        <div class="caption">
          <h4 class="">Wicker Park</h4>
        </div>
        <a>
          <img
            src="http://habitatcsn.files.wordpress.com/2012/01/wicker1.png"
            alt="..."
            width="470"
            height="280"
            class=""
          />
        </a>
      </a>
      <!-- Anchor tag ends covering both image and caption -->
    </div>

    <div class="neighborhood-3">
      <!-- Place the anchor tag here to cover both your caption and image -->
      <a href="/neighborhoods/3" class="">
        <div class="caption">
          <h4 class="">River North</h4>
        </div>
        <a>
          <img
            src="https://www.price4limo.com/locations/site/assets/files/126852/chicago_nightlife_review.600x0-is.jpg"
            alt="..."
            width="470"
            height="280"
            class=""
          />
        </a>
      </a>
      <!-- Anchor tag ends covering both image and caption -->
    </div>

    <div class="neighborhood-4">
      <!-- Place the anchor tag here to cover both your caption and image -->
      <a href="/neighborhoods/4" class="">
        <div class="caption">
          <h4 class="">Lakeview</h4>
        </div>
        <a>
          <img
            src="https://cdn.choosechicago.com/uploads/2019/05/wrigleyville-1-1800x900.jpg"
            alt="..."
            width="470"
            height="280"
            class=""
          />
        </a>
      </a>
      <!-- Anchor tag ends covering both image and caption -->
    </div>

    <div class="neighborhood-5">
      <!-- Place the anchor tag here to cover both your caption and image -->
      <a href="/neighborhoods/5" class="">
        <div class="caption">
          <h4 class="">Lincoln Park</h4>
        </div>
        <a>
          <img
            src="https://img.theculturetrip.com/768x432/wp-content/uploads/2019/04/feature_dtd901.jpg"
            alt="..."
            width="470"
            height="280"
            class=""
          />
        </a>
      </a>
      <!-- Anchor tag ends covering both image and caption -->
    </div>
  </div>
</template>

<style>
h2 {
  text-align: center;
}

.neighborhood-1 {
  float: left;
}
.neighborhood-2 {
  float: right;
}
.neighborhood-3 {
  float: left;
}
a > img {
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background: #f5f5dc;
  padding: 0 0 12px;
}

.caption {
  font-family: sans;
  color: black;
  text-transform: uppercase;
  text-align: center;
  text-decoration: underline;
  border: 1px RosyBrown;
  background-color: RosyBrown;
}
.container {
  color: red;
  font-family: sans;
  text-transform: uppercase;
  text-align: center;
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
