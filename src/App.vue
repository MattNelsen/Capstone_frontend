<template>
  <div id="app">
    <h2>
      <span class="badge badge-secondary"></span>
    </h2>
    <nav id="nav">
      <ul>
        <li>
          <h12>
            Appy Hour
          </h12>
        </li>
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
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </li>

        <li>
          <img
            src="https://d1vki863cvir6c.cloudfront.net/uploads/topic/image/93/Course_Report_profile_photo_800px_by_800px.jpg"
            alt=""
            width="45"
          />
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
h12 {
  color: white;
  font-family: serif;
  font-weight: bold;
  font-size: 51px;
  text-shadow: 2px 2px #ff0000;
}
#app {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Tj9qWjDCwYb5xRdxu4ZHZGaOb-GTLHwoaxQDplyAr1ILRxIszA&s");
}
.dropdown-menu {
  background-color: black !important;
}
.dropdown-item:hover {
  color: black !important;
}
h2 {
  text-shadow: 2px 2px 4px #000000;
  text-transform: uppercase;
  color: steelBlue;
}
</style>
