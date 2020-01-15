import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import About from "../views/About.vue";
// import Neighborhood from "../views/Neighborhood.vue";
import NeighborhoodShow from "../views/NeighborhoodShow.vue";
// import WickerPark from "../views/WickerPark.vue";
// import LoganSquare from "../views/LoganSquare.vue";
// import RiverNorth from "../views/RiverNorth.vue";
// import Lakeview from "../views/Lakeview.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/home", name: "home", component: Home },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/about", name: "about", component: About },
  // { path: "/neighborhood", name: "neighborhood", component: Neighborhood },
  { path: "/neighborhoods/:id", name: "neighborhood-show", component: NeighborhoodShow }
  // { path: "/wickerpark", name: "wickerpark", component: WickerPark },
  // { path: "/logansquare", name: "logansquare", component: LoganSquare },
  // { path: "/rivernorth", name: "rivernorth", component: RiverNorth },
  // { path: "/lakeview", name: "lakeview", component: Lakeview }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
