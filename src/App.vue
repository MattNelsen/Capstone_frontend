<template>
  <div id="app">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>You must be 21+ years of age to view this site</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <h1>
      Appy Hour
      <span class="badge badge-secondary"></span>
      <img
        src="http://www.madeinchicago.org/wp-content/uploads/2014/07/MadeInChicago_Logo_Color.png"
        alt=""
        width="150"
      />
    </h1>
    <div class="about"></div>
    <header id="header">
      <nav id="nav">
        <ul>
          <li class="current"><a href="/home">Home</a></li>
          <li></li>
          <li>
            <a href="/signup">Signup</a>
          </li>
          <li><a href="/login">Login</a></li>
          <li><a href="/logout">Logout</a></li>
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
    </header>
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
  background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
}
</style>
