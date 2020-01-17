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
    <div class="col-sm-4">
      <div class="thumbnail">
        <!-- Place the anchor tag here to cover both your caption and image -->
        <a href="/neighborhoods/1" class="">
          <div class="caption">
            <h4 class="">Logan Square</h4>
          </div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/UAh8VjrwQNzQQ880uANp-7v4qLE=/0x0:2048x1365/1200x800/filters:focal(861x520:1187x846)/cdn.vox-cdn.com/uploads/chorus_image/image/57954839/27211487959_893cd4d20b_k.0.jpg"
            alt="..."
            width="470"
            height="280"
            class=""
          />
        </a>
        <!-- Anchor tag ends covering both image and caption -->
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <!-- Place the anchor tag here to cover both your caption and image -->
        <a href="/neighborhoods/2" class="">
          <div class="caption">
            <h4 class="">Wicker Park</h4>
          </div>
          <img
            src="http://habitatcsn.files.wordpress.com/2012/01/wicker1.png"
            alt="..."
            width="470"
            height="280"
            class=""
          />
        </a>
        <!-- Anchor tag ends covering both image and caption -->
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <!-- Place the anchor tag here to cover both your caption and image -->
        <a href="/neighborhoods/3" class="">
          <div class="caption">
            <h4 class="">River North</h4>
          </div>
          <img
            src="https://www.price4limo.com/locations/site/assets/files/126852/chicago_nightlife_review.600x0-is.jpg"
            alt="..."
            width="470"
            height="280"
            class=""
          />
        </a>
        <!-- Anchor tag ends covering both image and caption -->
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <!-- Place the anchor tag here to cover both your caption and image -->
        <a href="/neighborhoods/4" class="">
          <div class="caption">
            <h4 class="">Lakeview</h4>
          </div>
          <img
            src="https://cdn.choosechicago.com/uploads/2019/05/wrigleyville-1-1800x900.jpg"
            alt="..."
            width="470"
            height="280"
            class=""
          />
        </a>
        <!-- Anchor tag ends covering both image and caption -->
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <!-- Place the anchor tag here to cover both your caption and image -->
        <a href="/neighborhoods/5" class="">
          <div class="caption">
            <h4 class="">Lincoln Park</h4>
          </div>
          <img
            src="https://img.theculturetrip.com/768x432/wp-content/uploads/2019/04/feature_dtd901.jpg"
            alt="..."
            width="470"
            height="280"
            class=""
          />
        </a>
        <!-- Anchor tag ends covering both image and caption -->
      </div>
    </div>
  </div>
</template>

<style>
.caption {
  text-align: center;
}
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
