<template>
  <div id="app">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>You must be 21+ years of age to view this site</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
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
              <a class="dropdown-item" href="#">Logan Square</a>
              <a class="dropdown-item" href="#">Wicker Park</a>
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
  color: tan;
  font-family: Arial Narrow, Arial, sans-serif;
  font-stretch: expanded;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  max-width: 100%;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
