<template>
  <div id="app">
    <h1>
      <img
        src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F39804873%2F7178205149%2F1%2Foriginal.jpg?s=ed4a95a0e73357a0292be11512587c68"
        alt=""
        width="100%"
        height="350"
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
            <a class="dropdown-item" href="/logansquare">Logan Square</a>
            <a class="dropdown-item" href="/wickerpark">Wicker Park</a>
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
          <a href="/logout">Logout</a>
        </li>
        |
        <li></li>
        <img
          src="https://res.cloudinary.com/teepublic/image/private/s--AnJelcOE--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1559853739/production/designs/5009220_0.jpg"
          alt=""
          width="100"
        />
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
h1 {
  text-shadow: 2px 2px 4px #000000;
  text-transform: uppercase;
  color: SteelBlue;
}
</style>
