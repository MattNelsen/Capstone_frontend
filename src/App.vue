<template>
  <div id="app">
    <h1>
      Appy Hour
      <span class="badge badge-secondary"></span>

      <ul class="nav justify-content-center">
        <li class="nav-item"></li>
        <li></li>
        <li>
          |
          <a href="/signup">Sign up</a>
          |
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
      </ul>
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
  background-image: url(http://www.theperfectspotsf.com/wp02/theperfectspotsf/public_html/wp02/wp-content/uploads/2013/07/Mikkeller-Bar-brick.jpg);
  color: SteelBlue;
}
</style>
