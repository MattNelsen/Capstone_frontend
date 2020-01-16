<template>
  <div id="app">
    <h1>
      <img
        src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F39804873%2F7178205149%2F1%2Foriginal.jpg?s=ed4a95a0e73357a0292be11512587c68"
        alt=""
        width="100%"
        height="300"
      />
      <span class="badge badge-secondary"></span>
    </h1>
    <nav id="nav">
      <ul>
        <li class="current"><a href="/home">Home</a></li>
        <li></li>
        <li>
          <a href="/about">About Me</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Neighborhoods
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/neighborhoods/1">Logan Square</a>
            <a class="dropdown-item" href="/neighborhoods/2">Wicker Park</a>
            <a class="dropdown-item" href="/neighborhoods/3">River North</a>
            <a class="dropdown-item" href="/neighborhoods/4">Lakeview</a>
            <a class="dropdown-item" href="/neighborhoods/5">Lincoln Park</a>
          </div>
        </li>
        <li class="nav-item"></li>
        <img
          src="https://res.cloudinary.com/teepublic/image/private/s--AnJelcOE--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1559853739/production/designs/5009220_0.jpg"
          alt=""
          width="100"
        />
        <li></li>
        <li>
          <a href="/signup">Sign up</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        |
        <li>
          <a href="/home">Logout</a>
        </li>
        |
        <li></li>
        <img
          src="https://res.cloudinary.com/teepublic/image/private/s--AnJelcOE--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1559853739/production/designs/5009220_0.jpg"
          alt=""
          width="100"
        />
        <li></li>
        <li>
          <a href="/contact">Contact</a>
        </li>

        <li>
          <img
            src="https://d1vki863cvir6c.cloudfront.net/uploads/topic/image/93/Course_Report_profile_photo_800px_by_800px.jpg"
            alt=""
            width="45"
          />
        </li>
        <li>
          <img src="https://png.pngtree.com/element_our/md/20180626/md_5b322281773f5.jpg" alt="" width="45" />
        </li>
        <li>
          <img src="https://png.pngtree.com/element_our/md/20180626/md_5b32227feb591.jpg" alt="" width="45" />
        </li>
      </ul>
    </nav>

    <!-- ... -->

    <!--/header-->

    <router-view />

    <footer id="footer" class="midnight-blue">
      <!-- ... -->
    </footer>
    <!--/#footer-->
  </div>
</template>

<style>
.dropdown-menu {
  background-color: black !important;
}
.dropdown-item:hover {
  color: black !important;
}
h1 {
  text-shadow: 2px 2px 4px #000000;
  text-transform: uppercase;
  color: SteelBlue;
}
</style>
